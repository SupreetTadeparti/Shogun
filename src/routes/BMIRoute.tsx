import React, { useState } from "react";
import "../assets/css/BMIRoute.css";
import Btn from "../components/Btn";

const BMIRoute = (): React.ReactElement => {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [bmi, setBmi] = useState<number>();

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Failed");
      return;
    }
    const BMIRaw = (1e4 * weight) / (height * height);

    const BMI = Math.round((BMIRaw + Number.EPSILON) * 10) / 10;

    setBmi(BMI);
  };

  const calculateCategory = () => {
    if (!bmi) return "Error";

    if (bmi < 18.5) return "Under Weight";
    if (bmi < 25) return "Normal Weight";
    if (bmi < 30) return "Over Weight";
    return "Obese";
  };

  const userMilestoneStyles = {
    "--x": bmi ? Math.min(40, Math.max(14, bmi)) : 14,
  } as React.CSSProperties;

  return (
    <div className="bmi-route-container">
      <form className="bmi-form" action="#">
        <h1 className="bmi-form__heading">BMI Calculator</h1>

        <label htmlFor="height-input">Height (Centimeters)</label>
        <input
          className="bmi-form__input"
          id="height-input"
          type="text"
          placeholder="Height..."
          onChange={(e) => {
            // Only allow numbers
            e.target.value = e.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*?)\..*/g, "$1");

            const x = parseInt(e.target.value);
            setHeight(x);
          }}
        />

        <label htmlFor="weight-input">Weight (Kilograms)</label>
        <input
          className="bmi-form__input"
          id="weight-input"
          type="text"
          placeholder="Weight..."
          onChange={(e) => {
            // Only allow numbers
            e.target.value = e.target.value
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*?)\..*/g, "$1");

            const x = parseInt(e.target.value);
            setWeight(x);
          }}
        />

        <Btn
          content="Calculate"
          onClick={calculateBMI}
          style={{ width: "100%", textAlign: "center" }}
        />
      </form>
      <div className={`result-container ${!bmi ? "hidden" : ""}`}>
        <div className="result__heading">You're BMI Is:</div>
        <div className="result__bmi">{bmi}</div>
        <div className="result__category">{calculateCategory()}</div>
        <div className="result__illustration">
          <div className="result__milestones">
            <div className="result__milestone under">14</div>
            <div className="result__milestone normal">18.5</div>
            <div className="result__milestone over">25</div>
            <div className="result__milestone obese">30</div>
            <div className="result__milestone end">40</div>
            <div className="result__milestone user" style={userMilestoneStyles}>
              You
            </div>
          </div>
        </div>
        <div className="result__categories">
          <div className="result__categories__category">
            <div className="result__category__name">Under Weight: </div>
            <div className="result__category__range">&lt; 18.5</div>
          </div>
          <div className="result__categories__category">
            <div className="result__category__name">Normal Weight:</div>
            <div className="result__category__range">18.5 - 24.9</div>
          </div>
          <div className="result__categories__category">
            <div className="result__category__name">Over Weight: </div>
            <div className="result__category__range">25 - 29.9</div>
          </div>
          <div className="result__categories__category">
            <div className="result__category__name">Obesity: </div>
            <div className="result__category__range">&gt; 29.9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMIRoute;
