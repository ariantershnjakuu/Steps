import { useState } from "react";

const message = [
  "Learn React",
  "Apply for jobs",
  "Invest yor new income"
]

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(true);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  return (
    <>
      <button className="close" onClick={() => setOpen(!open)}>
        &times;
      </button>

      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={currentStep >= 1 ? "active" : ""}>1</div>
            <div className={currentStep >= 2 ? "active" : ""}>2</div>
            <div className={currentStep >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">Step {currentStep}: {message[currentStep - 1]}</p>
          <div className="buttons">
            <button onClick={handlePrevious}>Previos</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
