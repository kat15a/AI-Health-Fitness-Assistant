function Meal() {
  const meals = [
    {
      icon: "🍳",
      name: "Breakfast",
      time: "08:00 AM",
      food: "Oats, banana & 2 boiled eggs",
      calories: "420 kcal"
    },
    {
      icon: "🥗",
      name: "Lunch",
      time: "01:00 PM",
      food: "Brown rice, dal & vegetables",
      calories: "560 kcal"
    },
    {
      icon: "🍎",
      name: "Snack",
      time: "04:30 PM",
      food: "Apple & handful of almonds",
      calories: "180 kcal"
    },
    {
      icon: "🍲",
      name: "Dinner",
      time: "08:00 PM",
      food: "Roti, paneer & fresh salad",
      calories: "490 kcal"
    }
  ];

  return (
    <div className="meal-list">

      {meals.map((meal, index) => (
        <div className="meal-item" key={index}>

          <div className="meal-icon">
            {meal.icon}
          </div>

          <div className="meal-info">

            <div className="meal-top">
              <h3>{meal.name}</h3>
              <span>{meal.time}</span>
            </div>

            <p>{meal.food}</p>

          </div>

          <strong>{meal.calories}</strong>

        </div>
      ))}

    </div>
  );
}

export default Meal;