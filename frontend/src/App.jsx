import BMI from "./components/BMI";
import Chat from "./components/Chat";
import Meal from "./components/Meal";
import Navbar from "./components/Navbar";
import Workout from "./components/Workout";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="tag">🤖 AI POWERED HEALTH PLATFORM</p>

          <h1>
            Your Personal
            <span> AI Health </span>
            Assistant
          </h1>

          <p className="hero-text">
            Track your BMI, discover healthy meals, follow workouts
            and get personalized guidance from AI.
          </p>

          <a href="#assistant" className="hero-button">
            Start AI Assistant →
          </a>
        </div>

        <div className="hero-card">
          <div className="hero-icon">❤️</div>
          <h3>Health Score</h3>
          <div className="score">86</div>
          <p>Good progress!</p>

          <div className="progress">
            <div></div>
          </div>
        </div>
      </section>


      {/* STATS */}
      <section className="stats">

        <div className="stat-card">
          <div className="stat-icon">⚖️</div>
          <div>
            <p>BMI</p>
            <h2>22.4</h2>
            <span>Healthy</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🔥</div>
          <div>
            <p>Calories</p>
            <h2>1,850</h2>
            <span>kcal today</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">🏃</div>
          <div>
            <p>Workout</p>
            <h2>35 min</h2>
            <span>Today</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💧</div>
          <div>
            <p>Water</p>
            <h2>6 / 8</h2>
            <span>glasses</span>
          </div>
        </div>

      </section>


      {/* BMI + MEAL */}
      <section className="dashboard-grid">

        <div className="dashboard-card">
          <div className="section-title">
            <div>
              <p className="small-title">HEALTH TOOL</p>
              <h2>BMI Calculator</h2>
            </div>

            <span className="round-icon">⚖️</span>
          </div>

          <BMI />
        </div>


        <div className="dashboard-card" id="meal">
          <div className="section-title">
            <div>
              <p className="small-title">NUTRITION</p>
              <h2>Today's Meal Plan</h2>
            </div>

            <span className="round-icon">🥗</span>
          </div>

          <Meal />
        </div>

      </section>


      {/* WORKOUT */}
      <section id="workout" className="workout-section">

        <div className="section-heading">
          <div>
            <p className="small-title">FITNESS</p>
            <h2>Today's Workout</h2>
          </div>

          <span>35 min • Beginner</span>
        </div>

        <Workout />

      </section>


      {/* AI */}
      <section id="assistant" className="ai-section">

        <div className="ai-header">
          <div className="ai-logo">🤖</div>

          <div>
            <p className="small-title">YOUR AI COACH</p>
            <h2>AI Health Assistant</h2>
          </div>
        </div>

        <p>
          Ask me about nutrition, workouts, BMI or healthy lifestyle
          recommendations.
        </p>

        <Chat />

      </section>

    </div>
  );
}

export default App;