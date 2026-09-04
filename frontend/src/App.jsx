import { useEffect, useState } from "react";

import BMI from "./components/BMI";
import Chat from "./components/Chat";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import Workout from "./components/Workout";

import "./App.css";


/* =========================================================
   GET CURRENT PAGE FROM URL HASH
   ========================================================= */

function getCurrentPage() {
  const hash = window.location.hash;

  if (hash === "#meal") {
    return "meal";
  }

  if (hash === "#workout") {
    return "workout";
  }

  if (hash === "#assistant") {
    return "assistant";
  }

  return "dashboard";
}


/* =========================================================
   DASHBOARD
   ========================================================= */

function Dashboard() {
  return (
    <>
      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="tag">
            🤖 AI POWERED HEALTH PLATFORM
          </p>

          <h1>
            Your Personal
            <span> AI Health </span>
            Assistant
          </h1>

          <p className="hero-text">
            Track your BMI, discover healthy meals, follow workouts
            and get personalized guidance from AI.
          </p>

          <a
            href="#assistant"
            className="hero-button"
          >
            Start AI Assistant →
          </a>

        </div>


        {/* HEALTH SCORE */}

        <div className="hero-card">

          <div className="hero-icon">
            ❤️
          </div>

          <h3>
            Health Score
          </h3>

          <div className="score">
            86
          </div>

          <p>
            Good progress!
          </p>

          <div className="progress">
            <div></div>
          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stat-card">

          <div className="stat-icon">
            ⚖️
          </div>

          <div>
            <p>BMI</p>
            <h2>22.4</h2>
            <span>Healthy</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            🔥
          </div>

          <div>
            <p>Calories</p>
            <h2>1,850</h2>
            <span>kcal today</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            🏃
          </div>

          <div>
            <p>Workout</p>
            <h2>35 min</h2>
            <span>Today</span>
          </div>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            💧
          </div>

          <div>
            <p>Water</p>
            <h2>6 / 8</h2>
            <span>glasses</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          BMI + MEAL PREVIEW
          ===================================================== */}

      <section className="dashboard-grid">

        {/* ================= BMI ================= */}

        <div className="dashboard-card">

          <div className="section-title">

            <div>

              <p className="small-title">
                HEALTH TOOL
              </p>

              <h2>
                BMI Calculator
              </h2>

            </div>

            <span className="round-icon">
              ⚖️
            </span>

          </div>

          <BMI />

        </div>


        {/* ================= MEAL PREVIEW ================= */}

        <div className="dashboard-card dashboard-preview">

          <div className="section-title">

            <div>

              <p className="small-title">
                NUTRITION
              </p>

              <h2>
                Today's Meal Plan
              </h2>

            </div>

            <span className="round-icon">
              🥗
            </span>

          </div>


          <div className="preview-meals">

            <div className="preview-meal">

              <div className="preview-meal-icon">
                🍳
              </div>

              <div>
                <h3>
                  Breakfast
                </h3>

                <p>
                  Oats, banana, milk & eggs
                </p>
              </div>

              <span>
                420 kcal
              </span>

            </div>


            <div className="preview-meal">

              <div className="preview-meal-icon">
                🍛
              </div>

              <div>
                <h3>
                  Lunch
                </h3>

                <p>
                  Brown rice, dal & vegetables
                </p>
              </div>

              <span>
                560 kcal
              </span>

            </div>


            <div className="preview-meal">

              <div className="preview-meal-icon">
                🥗
              </div>

              <div>
                <h3>
                  Dinner
                </h3>

                <p>
                  Roti, paneer & fresh salad
                </p>
              </div>

              <span>
                490 kcal
              </span>

            </div>

          </div>


          <a
            href="#meal"
            className="view-all-button"
          >
            View Full Meal Plan →
          </a>

        </div>

      </section>


      {/* =====================================================
          WORKOUT PREVIEW
          ===================================================== */}

      {/* =====================================================
          WORKOUT PREVIEW
          ===================================================== */}

      <section className="dashboard-workout">

        <div className="dashboard-workout-container">

          <div className="section-heading">

            <div>
              <p className="small-title">
                FITNESS
              </p>

              <h2>
                Today's Workout
              </h2>
            </div>

            <span>
              47 min • Intermediate
            </span>

          </div>


          <div className="dashboard-workout-grid">

            <div className="dashboard-workout-card">

              <div className="workout-preview-icon">
                🔥
              </div>

              <h3>
                Warm Up
              </h3>

              <p>
                Dynamic stretching & jumping jacks
              </p>

              <strong>
                7 min
              </strong>

            </div>


            <div className="dashboard-workout-card">

              <div className="workout-preview-icon">
                🏋️
              </div>

              <h3>
                Strength
              </h3>

              <p>
                Squats, push-ups, lunges & plank
              </p>

              <strong>
                20 min
              </strong>

            </div>


            <div className="dashboard-workout-card">

              <div className="workout-preview-icon">
                🏃
              </div>

              <h3>
                Cardio
              </h3>

              <p>
                Running, high knees & mountain climbers
              </p>

              <strong>
                15 min
              </strong>

            </div>


            <div className="dashboard-workout-card">

              <div className="workout-preview-icon">
                🧘
              </div>

              <h3>
                Cool Down
              </h3>

              <p>
                Full-body stretching & breathing
              </p>

              <strong>
                5 min
              </strong>

            </div>

          </div>


          <div className="dashboard-workout-action">

            <a
              href="#workout"
              className="view-all-button"
            >
              View Full Workout →
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          AI PREVIEW
          ===================================================== */}

      <section className="dashboard-ai">

        <div className="dashboard-ai-icon">
          🤖
        </div>

        <div>

          <p className="small-title">
            YOUR AI COACH
          </p>

          <h2>
            Need help with your health?
          </h2>

          <p>
            Ask our AI assistant about nutrition, workouts,
            BMI or healthy lifestyle recommendations.
          </p>

        </div>

        <a
          href="#assistant"
          className="primary-btn"
        >
          Ask AI →
        </a>

      </section>

    </>
  );
}


/* =========================================================
   APP
   ========================================================= */

function App() {

  const [page, setPage] = useState(getCurrentPage);


  /* Listen for navbar hash changes */

  useEffect(() => {

    const handleHashChange = () => {
      setPage(getCurrentPage());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };


    window.addEventListener(
      "hashchange",
      handleHashChange
    );


    return () => {
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };

  }, []);


  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* =================================================
          DASHBOARD
          ================================================= */}

      {page === "dashboard" && (
        <Dashboard />
      )}


      {/* =================================================
          MEAL PLAN PAGE
          ================================================= */}

      {page === "meal" && (
        <main className="page-container">

          <Meal />

        </main>
      )}


      {/* =================================================
          WORKOUT PAGE
          ================================================= */}

      {page === "workout" && (
        <main className="page-container">

          <Workout />

        </main>
      )}


      {/* =================================================
          AI ASSISTANT PAGE
          ================================================= */}

      {page === "assistant" && (
        <main className="assistant-page">

          <section className="ai-section">

            <div className="ai-header">

              <div className="ai-logo">
                🤖
              </div>

              <div>

                <p className="small-title">
                  YOUR AI COACH
                </p>

                <h2>
                  AI Health Assistant
                </h2>

              </div>

            </div>


            <p>
              Ask me about nutrition, workouts, BMI or healthy
              lifestyle recommendations.
            </p>


            <Chat />

          </section>

        </main>
      )}

    </div>
  );
}

export default App;
