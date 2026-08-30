package com.health.backend.controller;

import com.health.backend.model.BmiRequest;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
@CrossOrigin(origins = "http://localhost:5173")
public class HealthController {

    @PostMapping("/bmi")
    public Map<String, Object> calculateBMI(
            @RequestBody BmiRequest request) {

        double heightInMeters = request.getHeight() / 100;

        double bmi = request.getWeight()
                / (heightInMeters * heightInMeters);

        String category;

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        Map<String, Object> response = new HashMap<>();

        response.put("bmi", Math.round(bmi * 100.0) / 100.0);
        response.put("category", category);

        return response;
    }
}