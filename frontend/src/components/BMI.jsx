import { useState } from "react";

function BMI() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {

    if (!height || !weight) {
      return;
    }

    const heightMeter = Number(height) / 100;

    const result =
      Number(weight) / (heightMeter * heightMeter);

    setBmi(result.toFixed(1));
  };

  const getStatus = () => {

    if (bmi < 18.5) {
      return "Underweight";
    }

    if (bmi < 25) {
      return "Healthy";
    }

    if (bmi < 30) {
      return "Overweight";
    }

    return "Obese";
  };

  return (
    <div className="bmi-box">

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


      <button
        className="calculate-button"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>


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