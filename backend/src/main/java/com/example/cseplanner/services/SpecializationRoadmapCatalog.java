package com.example.cseplanner.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.*;
import org.springframework.core.io.ClassPathResource;
import java.io.IOException;
import java.util.*;

/** Roadmap-only learning detail. Assessment topics and scores remain untouched. */
public final class SpecializationRoadmapCatalog {
    private final ObjectMapper mapper;
    private final JsonNode content;
    private final Map<String,JsonNode> parents = new LinkedHashMap<>(), nodes = new LinkedHashMap<>();
    private final RoadmapInternshipCatalog internships;
    private final String slug;

    public SpecializationRoadmapCatalog(ObjectMapper mapper, JsonNode bank, String slug) throws IOException {
        this.mapper=mapper; this.slug=slug;
        try (var input=new ClassPathResource("roadmaps/"+slug+".json").getInputStream()) { content=mapper.readTree(input); }
        for (var topic:bank.path("subtopics")) parents.put(topic.path("id").asText(),topic);
        for (var node:content.path("units")) {
            String id=node.path("id").asText();
            if (nodes.put(id,node)!=null || !parents.containsKey(node.path("parentSubtopicId").asText())
                    || !content.path("assignments").has(id)) throw new IllegalStateException("Invalid roadmap node "+id);
        }
        for (var node:nodes.values()) for (var prerequisite:node.path("prerequisites"))
            if (!nodes.containsKey(prerequisite.asText())) throw new IllegalStateException("Unknown prerequisite "+prerequisite.asText());
        internships=new RoadmapInternshipCatalog(mapper,"roadmaps/"+slug+"-internships.json");
    }

    public String version() { return content.path("contentVersion").asText()+"+"+internships.contentVersion(); }

    public Map<String,Object> build(int start, Map<String,Double> scores, List<Map<String,Object>> review) {
        List<JsonNode> pending=new ArrayList<>(nodes.values()), ordered=new ArrayList<>();
        Set<String> scheduled=new HashSet<>();
        while (!pending.isEmpty()) {
            var next=pending.stream().filter(n->{
                for (var p:n.path("prerequisites")) if (!scheduled.contains(p.asText())) return false;
                return true;
            }).min(Comparator.comparingDouble(n->scores.getOrDefault(n.path("parentSubtopicId").asText(),0.0)))
                    .orElseThrow(()->new IllegalStateException("Cyclic roadmap: "+slug));
            pending.remove(next); ordered.add(next); scheduled.add(next.path("id").asText());
        }
        List<Map<String,Object>> plans=new ArrayList<>();
        Set<String> shownReview=new HashSet<>();
        for (int semester=start;semester<=8;semester++) {
            List<Map<String,Object>> units=new ArrayList<>();
            for (int i=0;i<ordered.size();i++) {
                if (start+i*(9-start)/ordered.size()!=semester) continue;
                var node=ordered.get(i); String id=node.path("id").asText(),parentId=node.path("parentSubtopicId").asText();
                var parent=parents.get(parentId);
                Map<String,Object> unit=new LinkedHashMap<>();
                unit.put("learningUnitId",id); unit.put("subtopicId",parentId);
                unit.put("parentSubtopic",parent.path("name").asText()); unit.put("subtopic",node.path("title").asText());
                unit.put("surveyScore",scores.getOrDefault(parentId,0.0)); unit.put("scoreScope","parent-area");
                unit.put("studyFocus",node.path("studyFocus").asText()); unit.put("learningGoal",node.path("goal").asText());
                unit.put("estimatedStudyHours",node.path("estimatedStudyHours").asInt());
                unit.put("prerequisites",java.util.stream.StreamSupport.stream(node.path("prerequisites").spliterator(),false).map(p->Map.of("id",p.asText(),"title",nodes.get(p.asText()).path("title").asText())).toList());
                unit.put("action","Use the linked course for this focus and revisit any broad-area review notes as needed.");
                unit.put("course",course(node));
                var gaps=shownReview.add(parentId)?review.stream().filter(r->parentId.equals(r.get("subtopicId")) && !Boolean.TRUE.equals(r.get("correct")))
                        .map(r->Map.<String,Object>of("concept",r.get("concept"),"url",r.get("resourceUrl"))).distinct().toList():List.of();
                unit.put("focusItems",gaps); unit.put("missedConcepts",List.of());
                unit.put("reviewScope","parent-area");
                unit.put("additionalResources",mapper.convertValue(parent.path("learningUnit").path("additionalResources"),List.class));
                unit.put("status","PLANNED"); units.add(unit);
            }
            // There are more authored learning steps than semesters in every track.
            if (units.isEmpty()) throw new IllegalStateException("Missing semester material in "+slug);
            // First eligible exercise: all its explicit learning prerequisites occur before it.
            var focus=units.stream().filter(u->"Selected course tasks".equals(content.path("assignments").path((String)u.get("learningUnitId")).path("sourceType").asText()))
                    .findFirst().orElse(units.getFirst());
            var assignment=assignment((String)focus.get("learningUnitId"));
            List<String> deliverables=new ArrayList<>();
            deliverables.add("Use the individual course-linked assignment below to practise this semester's material independently.");
            if (semester>=5) deliverables.add("Review relevant internship application requirements and describe your course work honestly.");
            plans.add(Map.of("semester",semester,"learningUnits",units,"projectRequirements",assignment,"deliverables",deliverables));
        }
        return Map.of("contentVersion",version(),"semesters",plans,"internshipOpportunities",internships.forRoadmap(plans,start),
                "note",(start>=7?"The remaining schedule is dense; follow prerequisites and allow extra study time. ":"")+
                "Reading times are planning estimates for selected modules, not full-course durations. Scores describe broad survey areas, not individual lessons or internship readiness. Assignments are individual practice; this website does not check their completion.");
    }

    private Map<String,Object> course(JsonNode node) {
        String parent=node.path("parentSubtopicId").asText();
        JsonNode base=parents.get(parent).path("learningUnit");
        if (node.has("courseRef")) {
            JsonNode selected=null;
            for (var resource:base.path("additionalResources"))
                if (node.path("courseRef").asText().equals(resource.path("title").asText())) selected=resource;
            if (selected==null) throw new IllegalStateException("Unknown existing course reference for "+node.path("id").asText());
            base=selected;
        }
        Map<String,Object> result=new LinkedHashMap<>();
        result.put("title",base.path("title").asText()); result.put("provider",node.path("provider").asText(content.path("courseOverrides").path(parent).path("provider").asText(base.path("provider").asText())));
        result.put("url",content.path("courseOverrides").path(parent).path("url").asText(base.path("url").asText()));
        result.put("selectedCoverage",node.path("courseCoverage").asText());
        if (content.path("courseOverrides").path(parent).has("access")) result.put("access",content.path("courseOverrides").path(parent).path("access").asText());
        return result;
    }

    private Map<String,Object> assignment(String id) {
        var node=nodes.get(id);
        Map<String,Object> doc=mapper.convertValue(content.path("assignments").path(id),new TypeReference<LinkedHashMap<String,Object>>(){});
        int hours=(int)doc.get("estimatedHours");
        doc.put("id",slug+":assignment:"+id); doc.put("subtopicId",id); doc.put("parentSubtopicId",node.path("parentSubtopicId").asText());
        doc.put("course",course(node)); doc.put("goals",List.of(node.path("goal").asText(),"Explain your approach and its limitations independently."));
        List<String> before=new ArrayList<>(); before.add("First study: "+node.path("studyFocus").asText()+".");
        for (var p:node.path("prerequisites")) before.add("Complete the scheduled material for "+nodes.get(p.asText()).path("title").asText()+" first.");
        doc.put("prerequisites",before); doc.put("prerequisiteTopicIds",mapper.convertValue(node.path("prerequisites"),List.class));
        doc.put("duration","1–2 weeks after studying the relevant modules");
        doc.put("timeline",List.of(Map.of("phase","Week 1: review and plan","hours",hours==8?2:1),Map.of("phase","Week 1: implement or work the example","hours",3),Map.of("phase","Week 2: inspect behavior and edge cases","hours",hours==8?2:1),Map.of("phase","Week 2: explain and document","hours",1)));
        doc.put("scope","Only the named exercise is required. No full product, public deployment, paid service, hardware purchase, team work or provider submission is required.");
        doc.put("submission",List.of("Keep your local source or worked calculation file and any fictional input fixture.","Keep brief setup/run instructions and the observed outputs; this website does not request uploads or review your work."));
        doc.put("proofOfLearning",List.of("For your own learning, explain one important decision and one limitation.","Change one input, predict what should happen, and compare it with your result. No additional student assessment is required."));
        doc.put("independentWork","Work individually. Use only the linked courses and their supplied references. No AI assistance, vibe coding, generated solutions, copied completed projects or help from another person. Explicit course starter files may be reused with attribution. This website does not verify assignment completion.");
        return doc;
    }
}
