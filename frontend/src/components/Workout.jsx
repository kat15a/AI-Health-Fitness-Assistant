import React, { useMemo, useState } from "react";

const workoutPlans = {
  beginner: [
    {
      name: "Warm Up",
      icon: "🔥",
      exercises: "Jumping jacks • Arm circles • Light stretching",
      duration: 5,
    },
    {
      name: "Strength",
      icon: "🏋️",
      exercises: "Squats • Push-ups • Lunges",
      duration: 15,
    },
    {
      name: "Cardio",
      icon: "🏃",
      exercises: "Walking • High knees • Light jogging",
      duration: 10,
    },
    {
      name: "Cool Down",
      icon: "🧘",
      exercises: "Stretching • Deep breathing",
      duration: 5,
    },
  ],

  intermediate: [
    {
      name: "Warm Up",
      icon: "🔥",
      exercises: "Jumping jacks • Arm circles • Dynamic stretching",
      duration: 7,
    },
    {
      name: "Strength",
      icon: "🏋️",
      exercises: "Squats • Push-ups • Lunges • Plank",
      duration: 20,
    },
    {
      name: "Cardio",
      icon: "🏃",
      exercises: "Running • High knees • Mountain climbers",
      duration: 15,
    },
    {
      name: "Cool Down",
      icon: "🧘",
      exercises: "Full-body stretching • Deep breathing",
      duration: 5,
    },
  ],

  advanced: [
    {
      name: "Warm Up",
      icon: "🔥",
      exercises: "Jumping jacks • Dynamic stretching • High knees",
      duration: 10,
    },
    {
      name: "Strength",
      icon: "🏋️",
      exercises: "Squats • Push-ups • Lunges • Burpees • Plank",
      duration: 25,
    },
    {
      name: "Cardio",
      icon: "🏃",
      exercises: "Running • HIIT • Mountain climbers",
      duration: 20,
    },
    {
      name: "Cool Down",
      icon: "🧘",
      exercises: "Stretching • Yoga • Deep breathing",
      duration: 5,
    },
  ],
};

function getRecommendedLevel(bmi) {
  if (!bmi) return "beginner";

  if (bmi < 18.5) {
    return "beginner";
  }

  if (bmi < 25) {
    return "intermediate";
  }

  return "beginner";
}

export default function Workout() {
  const savedBMI = Number(localStorage.getItem("bmi")) || 22.4;

  const [bmi, setBmi] = useState(savedBMI);
  const [level, setLevel] = useState(getRecommendedLevel(savedBMI));
  const [completed, setCompleted] = useState([]);
  const [started, setStarted] = useState(false);

  const workouts = useMemo(() => {
    return workoutPlans[level];
  }, [level]);

  const totalMinutes = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const completedCount = completed.length;

  const progress = Math.round(
    (completedCount / workouts.length) * 100
  );

  const toggleComplete = (index) => {
    setCompleted((previous) => {
      if (previous.includes(index)) {
        return previous.filter((item) => item !== index);
      }

      return [...previous, index];
    });
  };

  const startWorkout = () => {
    setStarted(true);
    setCompleted([]);
  };

  const resetWorkout = () => {
    setStarted(false);
    setCompleted([]);
  };

  const updateBMI = () => {
    const currentBMI = Number(localStorage.getItem("bmi")) || bmi;

    setBmi(currentBMI);
    setLevel(getRecommendedLevel(currentBMI));
    setCompleted([]);
  };

  return (
    <section className="workout-page">
      <div className="page-header workout-header">
        <div>
          <p className="section-label">FITNESS</p>
          <h1>Today's Workout</h1>

          <p className="page-description">
            Follow a workout plan based on your fitness level and BMI.
          </p>
        </div>

        <div className="workout-stats">
          <strong>{totalMinutes} min</strong>
          <span>• {level}</span>
        </div>
      </div>

      <div className="workout-controls">
        <div className="bmi-info">
          <span>Your BMI</span>
          <strong>{bmi.toFixed(1)}</strong>
        </div>

        <div className="control-group">
          <label>Fitness Level</label>

          <select
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
              setCompleted([]);
              setStarted(false);
            }}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button className="secondary-btn" onClick={updateBMI}>
          Sync BMI
        </button>

        {!started ? (
          <button className="primary-btn" onClick={startWorkout}>
            Start Workout →
          </button>
        ) : (
          <button className="secondary-btn" onClick={resetWorkout}>
            Reset Workout
          </button>
        )}
      </div>

      {started && (
        <div className="workout-progress">
          <div className="progress-header">
            <span>Workout Progress</span>
            <strong>{progress}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p>
            {completedCount} of {workouts.length} workout sections completed
          </p>
        </div>
      )}

      <div className="workout-grid">
        {workouts.map((workout, index) => {
          const isCompleted = completed.includes(index);

          return (
            <div
              className={`workout-card ${
                isCompleted ? "completed" : ""
              }`}
              key={workout.name}
            >
              <div className="workout-icon">{workout.icon}</div>

              <div className="workout-card-content">
                <div className="workout-card-title">
                  <h3>{workout.name}</h3>

                  {isCompleted && (
                    <span className="complete-badge">✓ Done</span>
                  )}
                </div>

                <p>{workout.exercises}</p>

                <div className="workout-bottom">
                  <span>{workout.duration} min</span>

                  {started && (
                    <button
                      className={
                        isCompleted
                          ? "completed-btn"
                          : "complete-btn"
                      }
                      onClick={() => toggleComplete(index)}
                    >
                      {isCompleted ? "Completed ✓" : "Complete"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {progress === 100 && (
        <div className="workout-finished">
          🎉 Great job! You completed today's workout.
        </div>
      )}

      <div className="coach-card">
        <div className="coach-icon">🤖</div>

        <div>
          <p className="section-label">YOUR AI COACH</p>
          <h2>AI Health Assistant</h2>

          <p>
            Need help with exercises, nutrition, BMI or healthy lifestyle
            recommendations? Ask your AI assistant.
          </p>
        </div>
      </div>
    </section>
  );
}