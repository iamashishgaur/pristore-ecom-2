import React, { useState } from "react";
// import "./stepper.css";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { styled } from "styled-components";
const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 2rem; */
`;
const StepChekar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StepButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Steps = () => {
  const steps = ["Address", "Order Summary", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <StepContainer>
        <StepChekar>
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">
                <Link to={`/${currentStep}`}>{step}</Link>
              </p>
            </div>
          ))}
        </StepChekar>
      </StepContainer>
    </>
  );
};

export default Steps;
