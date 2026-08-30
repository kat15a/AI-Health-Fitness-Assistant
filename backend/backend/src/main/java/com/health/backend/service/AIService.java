package com.health.backend.service;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AIService {

    private final Client client;

    public AIService(@Value("${gemini.api.key}") String apiKey) {
        client = Client.builder()
                .apiKey(apiKey)
                .build();
    }

    public String askAI(String question) {

        GenerateContentResponse response =
                client.models.generateContent(
                        "gemini-2.5-flash",
                        question,
                        null
                );

        return response.text();
    }
}