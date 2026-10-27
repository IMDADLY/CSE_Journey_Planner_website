package com.example.cseplanner.services;

import com.fasterxml.jackson.databind.*;
import org.junit.jupiter.api.Test;
import org.springframework.core.io.ClassPathResource;
import java.util.*;
import static org.junit.jupiter.api.Assertions.*;

class SpecializationRoadmapCatalogTest {
    private static final List<String> SLUGS=List.of("full-stack-web-dev","cloud-computing","data-engineering","game-development","embedded-systems");
    private final ObjectMapper mapper=new ObjectMapper();
    private JsonNode read(String path) throws Exception {
        try(var in=new ClassPathResource(path).getInputStream()) {return mapper.readTree(in);}
    }

    @SuppressWarnings("unchecked")
    @Test
    void allRoadmapsPreservePrerequisitesAndCreateCompleteAlignedDocuments() throws Exception {
        for (String slug:SLUGS) {
            var bank=read("assessment/"+slug+"-common-v2.json");
            var content=read("roadmaps/"+slug+".json");
            var catalog=new SpecializationRoadmapCatalog(mapper,bank,slug);
            var parentIds=new HashSet<String>();
            for(var parent:bank.path("subtopics"))parentIds.add(parent.path("id").asText());
            for(int pattern=0;pattern<3;pattern++) {
                Map<String,Double> scores=new HashMap<>();
                int index=0;
                for(String id:parentIds)scores.put(id,pattern==0?0.0:pattern==1?100.0:(index++%2==0?20.0:90.0));
                for(int start=1;start<=8;start++) {
                    var roadmap=catalog.build(start,scores,List.of());
                    assertEquals(catalog.version(),roadmap.get("contentVersion"));
                    var semesters=(List<Map<String,Object>>)roadmap.get("semesters");
                    assertEquals(9-start,semesters.size());
                    var seen=new HashSet<String>(); var selected=new HashSet<String>();
                    for(var semester:semesters) {
                        var units=(List<Map<String,Object>>)semester.get("learningUnits");
                        assertFalse(units.isEmpty(),slug);
                        var doc=(Map<String,Object>)semester.get("projectRequirements");
                        String selectedId=(String)doc.get("subtopicId");
                        assertTrue(selected.add(selectedId),"Assignment repeated");
                        assertTrue(units.stream().anyMatch(u->selectedId.equals(u.get("learningUnitId"))),"Exercise must relate to this semester");
                        for(var unit:units) {
                            String id=(String)unit.get("learningUnitId");
                            for(var p:(List<Map<String,Object>>)unit.get("prerequisites"))assertTrue(seen.contains(p.get("id")),id+" before "+p.get("id"));
                            assertTrue(seen.add(id),id);
                            assertTrue(parentIds.contains(unit.get("subtopicId")));
                            assertEquals(scores.get(unit.get("subtopicId")),unit.get("surveyScore"));
                            assertEquals("parent-area",unit.get("scoreScope"));
                            assertFalse(unit.containsKey("exitEvidence"),"Do not reintroduce oversized project requirements");
                            for(String field:List.of("learningGoal","studyFocus","parentSubtopic"))assertFalse(unit.get(field).toString().isBlank());
                            assertTrue((int)unit.get("estimatedStudyHours")>0);
                            var course=(Map<String,Object>)unit.get("course");
                            assertTrue(course.get("url").toString().startsWith("https://"));
                        }
                        for(String field:List.of("requirements","acceptanceCriteria","goals","prerequisites","techStack","submission","proofOfLearning"))assertFalse(((List<?>)doc.get(field)).isEmpty(),field);
                        int hours=(int)doc.get("estimatedHours"); assertTrue(hours>=6&&hours<=12);
                        assertEquals(hours,((List<Map<String,Object>>)doc.get("timeline")).stream().mapToInt(t->(int)t.get("hours")).sum());
                        for(String id:(List<String>)doc.get("prerequisiteTopicIds"))assertTrue(seen.contains(id));
                    }
                    assertEquals(content.path("units").size(),seen.size());
                    for(var role:(List<Map<String,Object>>)roadmap.get("internshipOpportunities"))
                        for(var material:(List<Map<String,Object>>)role.get("relatedMaterial")) {
                            assertTrue(seen.contains(material.get("courseTopicId")));
                            assertTrue(selected.contains(material.get("assignmentTopicId")));
                            assertTrue(((String)material.get("assignmentId")).startsWith(slug+":"));
                        }
                }
            }
            // Catalog references must be local to this track and name genuine authored material.
            var internships=read("roadmaps/"+slug+"-internships.json");
            for(var role:internships.path("opportunities"))for(var req:role.path("requirements")) {
                for(var id:req.path("courseTopicIds"))assertTrue(content.path("assignments").has(id.asText()));
                for(var id:req.path("assignmentTopicIds"))assertTrue(content.path("assignments").has(id.asText()));
            }
        }
    }

    @Test
    void catalogReferencesAndAssignmentCoverageAreComplete() throws Exception {
        // Authored references must stay within this track and cover every step.
        for(String slug:SLUGS) {
            var content=read("roadmaps/"+slug+".json");
            Set<String> ids=new HashSet<>(); for(var node:content.path("units"))assertTrue(ids.add(node.path("id").asText()));
            for(var node:content.path("units"))for(var p:node.path("prerequisites"))assertTrue(ids.contains(p.asText()));
            assertEquals(ids.size(),content.path("assignments").size());
        }
    }
}
