import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      return;
    }

    const heightInMeters = Number(height) / 100;

    const calculatedBMI =
      Number(weight) / (heightInMeters * heightInMeters);

    const roundedBMI = calculatedBMI.toFixed(1);

    // Show BMI on the screen
    setBmi(roundedBMI);

    // Save BMI so Meal and Workout pages can use it
    localStorage.setItem("bmi", roundedBMI);
  };

  const getStatus = () => {
    const numericBMI = Number(bmi);

    if (numericBMI < 18.5) {
      return "Underweight";
    }

    if (numericBMI < 25) {
      return "Healthy";
    }

    if (numericBMI < 30) {
      return "Overweight";
    }

    return "Obese";
  };

  return (
    <div className="bmi-box">

      {/* Height */}
      <div className="bmi-input">
        <label>Height</label>

        <div className="input-wrapper">
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <span>cm</span>
        </div>
      </div>

      {/* Weight */}
      <div className="bmi-input">
        <label>Weight</label>

        <div className="input-wrapper">
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <span>kg</span>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        className="calculate-button"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {/* BMI Result */}
      {bmi && (
        <div className="bmi-result">

          <div>
            <p>Your BMI</p>
            <h2>{bmi}</h2>
          </div>

          <div className="bmi-status">
            {getStatus()}
          </div>

        </div>
      )}

    </div>
  );
}

export default BMI;