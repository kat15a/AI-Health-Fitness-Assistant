import React, { useMemo, useState } from "react";

const mealPlans = {
  underweight: {
    title: "Healthy Weight Gain Plan",
    description:
      "A balanced calorie-rich plan with protein, healthy fats and complex carbohydrates.",

    vegetarian: [
      {
        type: "Breakfast",
        time: "08:00 AM",
        icon: "🍳",
        meal: "Oats, banana, milk & 2 boiled eggs",
        calories: 520,
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        icon: "🍛",
        meal: "Brown rice, dal, paneer & vegetables",
        calories: 650,
      },
      {
        type: "Snack",
        time: "04:30 PM",
        icon: "🍎",
        meal: "Apple, banana & handful of almonds",
        calories: 280,
      },
      {
        type: "Dinner",
        time: "08:00 PM",
        icon: "🥗",
        meal: "Roti, paneer curry & fresh salad",
        calories: 580,
      },
    ],

    nonVegetarian: [
      {
        type: "Breakfast",
        time: "08:00 AM",
        icon: "🍳",
        meal: "Oats, banana, milk & 2 eggs",
        calories: 540,
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        icon: "🍗",
        meal: "Brown rice, chicken curry & vegetables",
        calories: 700,
      },
      {
        type: "Snack",
        time: "04:30 PM",
        icon: "🥜",
        meal: "Fruit, yogurt & mixed nuts",
        calories: 300,
      },
      {
        type: "Dinner",
        time: "08:00 PM",
        icon: "🍗",
        meal: "Roti, grilled chicken & fresh salad",
        calories: 600,
      },
    ],
  },

  healthy: {
    title: "Balanced Healthy Plan",
    description:
      "A balanced meal plan focused on protein, vegetables, fruits and whole grains.",

    vegetarian: [
      {
        type: "Breakfast",
        time: "08:00 AM",
        icon: "🍳",
        meal: "Oats, banana, milk & 2 boiled eggs",
        calories: 420,
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        icon: "🍛",
        meal: "Brown rice, dal & vegetables",
        calories: 560,
      },
      {
        type: "Snack",
        time: "04:30 PM",
        icon: "🍎",
        meal: "Apple & handful of almonds",
        calories: 180,
      },
      {
        type: "Dinner",
        time: "08:00 PM",
        icon: "🥗",
        meal: "Roti, paneer & fresh salad",
        calories: 490,
      },
    ],

    nonVegetarian: [
      {
        type: "Breakfast",
        time: "08:00 AM",
        icon: "🍳",
        meal: "Oats, banana, milk & 2 eggs",
        calories: 440,
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        icon: "🍗",
        meal: "Brown rice, grilled chicken & vegetables",
        calories: 590,
      },
      {
        type: "Snack",
        time: "04:30 PM",
        icon: "🍎",
        meal: "Apple, yogurt & almonds",
        calories: 190,
      },
      {
        type: "Dinner",
        time: "08:00 PM",
        icon: "🍗",
        meal: "Roti, chicken & fresh salad",
        calories: 520,
      },
    ],
  },

  overweight: {
    title: "Weight Management Plan",
    description:
      "A nutrient-dense plan with controlled portions and high-fiber foods.",

    vegetarian: [
      {
        type: "Breakfast",
        time: "08:00 AM",
        icon: "🥣",
        meal: "Vegetable oats & low-fat curd",
        calories: 300,
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        icon: "🥗",
        meal: "2 rotis, dal, vegetables & salad",
        calories: 430,
      },
      {
        type: "Snack",
        time: "04:30 PM",
        icon: "🍎",
        meal: "One apple & green tea",
        calories: 120,
      },
      {
        type: "Dinner",
        time: "08:00 PM",
        icon: "🥗",
        meal: "Vegetable soup, paneer & salad",
        calories: 350,
      },
    ],

    nonVegetarian: [
      {
        type: "Breakfast",
        time: "08:00 AM",
        icon: "🍳",
        meal: "2 eggs, vegetable oats & green tea",
        calories: 320,
      },
      {
        type: "Lunch",
        time: "01:00 PM",
        icon: "🍗",
        meal: "2 rotis, grilled chicken & vegetables",
        calories: 450,
      },
      {
        type: "Snack",
        time: "04:30 PM",
        icon: "🍎",
        meal: "Apple & green tea",
        calories: 100,
      },
      {
        type: "Dinner",
        time: "08:00 PM",
        icon: "🥗",
        meal: "Chicken soup & fresh salad",
        calories: 330,
      },
    ],
  },
};


function getCategory(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  }

  if (bmi < 25) {
    return "healthy";
  }

  return "overweight";
}


export default function Meal() {

  const savedBMI =
    Number(localStorage.getItem("bmi")) || 22.4;

  const [bmi, setBmi] = useState(savedBMI);

  const [diet, setDiet] = useState("vegetarian");

  const [generated, setGenerated] = useState(false);


  const category = getCategory(bmi);


  /* Get the complete plan object */

  const selectedPlan = mealPlans[category];


  /* Get only the selected meal list */

  const meals = useMemo(() => {

    return selectedPlan[
      diet === "vegetarian"
        ? "vegetarian"
        : "nonVegetarian"
    ];

  }, [selectedPlan, diet]);


  const totalCalories = meals.reduce(
    (total, meal) => total + meal.calories,
    0
  );


  const generatePlan = () => {

    const currentBMI =
      Number(localStorage.getItem("bmi")) || bmi;

    setBmi(currentBMI);

    setGenerated(true);
  };


  return (
    <section className="meal-page">

      {/* ================= HEADER ================= */}

      <div className="page-header">

        <div>

          <p className="section-label">
            NUTRITION
          </p>

          <h1>
            Today's Meal Plan
          </h1>

          <p className="page-description">
            Personalized meals based on your BMI
            and dietary preference.
          </p>

        </div>

        <div className="meal-badge">
          🥗
        </div>

      </div>


      {/* ================= CONTROLS ================= */}

      <div className="meal-controls">

        <div className="control-group">

          <label>
            Diet Preference
          </label>

          <select
            value={diet}
            onChange={(e) => {
              setDiet(e.target.value);
              setGenerated(false);
            }}
          >

            <option value="vegetarian">
              Vegetarian
            </option>

            <option value="nonVegetarian">
              Non-Vegetarian
            </option>

          </select>

        </div>


        <div className="bmi-info">

          <span>
            Your BMI
          </span>

          <strong>
            {bmi.toFixed(1)}
          </strong>

          <small>

            {category === "underweight"
              ? "Underweight"
              : category === "healthy"
              ? "Healthy"
              : "Weight Management"}

          </small>

        </div>


        <button
          className="primary-btn"
          onClick={generatePlan}
        >
          Generate Meal Plan →
        </button>

      </div>


      {/* ================= SUCCESS MESSAGE ================= */}

      {generated && (

        <div className="success-message">

          ✓ Meal plan generated according to your
          BMI and diet preference.

        </div>

      )}


      {/* ================= SUMMARY ================= */}

      <div className="meal-summary">

        <div>

          <span>
            PLAN
          </span>

          <strong>
            {selectedPlan.title}
          </strong>

        </div>


        <div>

          <span>
            DAILY CALORIES
          </span>

          <strong>
            {totalCalories} kcal
          </strong>

        </div>


        <div>

          <span>
            MEALS
          </span>

          <strong>
            {meals.length}
          </strong>

        </div>

      </div>


      {/* ================= PLAN DESCRIPTION ================= */}

      <div className="meal-plan-header">

        <div>

          <p className="section-label">
            PERSONALIZED NUTRITION
          </p>

          <h2>
            {selectedPlan.title}
          </h2>

          <p>
            {selectedPlan.description}
          </p>

        </div>

      </div>


      {/* ================= MEALS ================= */}

      <div className="meal-list">

        {meals.map((meal) => (

          <div
            className="meal-card"
            key={meal.type}
          >

            <div className="meal-icon">
              {meal.icon}
            </div>


            <div className="meal-content">

              <div className="meal-title-row">

                <h3>
                  {meal.type}
                </h3>

                <span>
                  {meal.time}
                </span>

              </div>


              <p>
                {meal.meal}
              </p>

            </div>


            <div className="meal-calories">

              <strong>
                {meal.calories}
              </strong>

              <span>
                kcal
              </span>

            </div>

          </div>

        ))}

      </div>


      {/* ================= HEALTH TIP ================= */}

      <div className="nutrition-tip">

        <span>
          💡
        </span>

        <div>

          <strong>
            Health Tip
          </strong>

          <p>
            Stay hydrated throughout the day and try
            to include vegetables, fruits and protein
            in your meals.
          </p>

        </div>

      </div>

    </section>
  );
}