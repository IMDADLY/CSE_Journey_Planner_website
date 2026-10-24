package com.example.cseplanner.data;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.ReplaceOptions;
import org.bson.Document;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

@Component
public class AiMlQuestionSeeder implements CommandLineRunner {
    private final ObjectMapper mapper;
    private final MongoTemplate mongo;

    public AiMlQuestionSeeder(ObjectMapper mapper, MongoTemplate mongo) {
        this.mapper=mapper;
        this.mongo=mongo;
    }

    @Override
    public void run(String... args) throws Exception {
        JsonNode bank=mapper.readTree(new ClassPathResource("assessment/ai-ml-common-v1.json").getInputStream());
        String version=bank.path("bankVersion").asText();
        var collection=mongo.getCollection("aiMlAssessmentItems");
        for(JsonNode item:bank.path("questions")) {
            String id=item.path("id").asText()+"@"+version;
            Document document=Document.parse(item.toString());
            document.put("_id",id);
            document.put("formId",bank.path("form").path("id").asText());
            collection.replaceOne(Filters.eq("_id",id),document,new ReplaceOptions().upsert(true));
        }
    }
}
