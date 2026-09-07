# 🏋️ AI Health & Fitness Assistant(HealthFit AI)

An AI-powered health and fitness web application that helps users track their BMI, generate personalized meal plans, follow workout routines, and interact with an AI fitness assistant.

The application combines a modern React frontend with a Spring Boot backend and Google Gemini AI to provide an interactive health and fitness experience.

---

## 🚀 Features

### 📊 BMI Calculator
- Calculate BMI using height and weight.
- Automatically categorize BMI:
  - Underweight
  - Healthy
  - Overweight
  - Obesity
- BMI data is stored locally for use across the application.
- Provides health-related recommendations based on BMI.

### 🥗 Personalized Meal Plan
- Generate meal plans based on BMI category.
- Supports:
  - Vegetarian
  - Non-Vegetarian
- Displays recommended meals and calorie information.
- Provides nutrition tips.

### 🏋️ Workout Planner
- Personalized workout recommendations.
- Supports different fitness levels:
  - Beginner
  - Intermediate
  - Advanced
- Includes multiple exercises with sets/repetitions.
- Track workout completion.
- Displays workout progress.

### 🤖 AI Fitness Assistant
- AI-powered fitness assistant using Google Gemini.
- Users can ask health and fitness-related questions.
- Provides AI-generated guidance and recommendations.

### 📱 Responsive UI
- Modern dark-themed interface.
- Responsive design for different screen sizes.
- Separate sections for Dashboard, Meal Plan, Workout, and AI Assistant.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- Maven

### Database

- MySQL

### AI

- Google Gemini API
- Google GenAI Java SDK

### Development Tools

- IntelliJ IDEA
- VS Code
- Git
- GitHub

---

## 📂 Project Structure

```text
AI-Health-Fitness-Assistant/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BMI.jsx
│   │   │   ├── Meal.jsx
│   │   │   ├── Workout.jsx
│   │   │   └── Chat.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   └── backend/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       │   └── ..
│       │       │
│       │       └── resources/
│       │           └── application.properties
│       │
│       └── pom.xml
│
├── .gitignore
└── README.md
