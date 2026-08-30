package com.health.backend.controller;

import com.health.backend.service.AIService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "http://localhost:5173")
public class AIController {

    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/chat")
    public ResponseEntity<?> chat(@RequestBody Map<String, String> request) {

        String question = request.get("question");

        try {

            String answer = aiService.askAI(question);

            return ResponseEntity.ok(
                    Map.of("answer", answer)
            );

        } catch (Exception e) {

            return ResponseEntity
                    .status(429)
                    .body(Map.of(
                            "error", "Gemini API quota exceeded. Please try again later."
                    ));
        }
    }
}