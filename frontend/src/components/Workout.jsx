function Workout() {

  const workouts = [
    {
      icon: "🔥",
      name: "Warm Up",
      duration: "5 min",
      exercises: "Jumping jacks • Arm circles"
    },
    {
      icon: "🏋️",
      name: "Strength",
      duration: "15 min",
      exercises: "Squats • Push-ups • Lunges"
    },
    {
      icon: "🏃",
      name: "Cardio",
      duration: "10 min",
      exercises: "Running • High knees"
    },
    {
      icon: "🧘",
      name: "Cool Down",
      duration: "5 min",
      exercises: "Stretching • Deep breathing"
    }
  ];

  return (
    <div className="workout-grid">

      {workouts.map((workout, index) => (
        <div className="workout-card" key={index}>

          <div className="workout-icon">
            {workout.icon}
          </div>

          <div>
            <h3>{workout.name}</h3>
            <p>{workout.exercises}</p>
          </div>

          <span>{workout.duration}</span>

        </div>
      ))}

    </div>
  );
}

export default Workout;