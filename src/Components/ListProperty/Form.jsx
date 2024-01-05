import React, { useState } from 'react';
import BasicInfo from './Address';
import Price from './HotelDetail';
import Photos from './Photos';

import './Form.css';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1Data: {},
    step2Data: {},
    step3Data: {},
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStepIndicatorClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const handleFormDataChange = (step, data) => {
    setFormData({
      ...formData,
      [step]: data,
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <div className="multi-step-form">
      <div className="step-indicators">
        <div 
          className={`step ${currentStep === 1 ? 'active' : ''}`}
          onClick={() => handleStepIndicatorClick(1)}
        >
          Basic Info
        </div>
        <div 
          className={`step ${currentStep === 2 ? 'active' : ''}`}
          onClick={() => handleStepIndicatorClick(2)}
        >
          Pricing
        </div>
        <div
          className={`step ${currentStep === 3 ? 'active' : ''}`}
          onClick={() => handleStepIndicatorClick(3)}
        >
          Photos
        </div>
      </div>
      <div className="progress-bar">
        <div className={`progress-fill step${currentStep}`}></div>
      </div>
      {currentStep === 1 && (
        <BasicInfo
          data={formData.step1Data}
          onDataChange={(data) => handleFormDataChange('step1Data', data)}
          onNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <Price
          data={formData.step2Data}
          onDataChange={(data) => handleFormDataChange('step2Data', data)}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {currentStep === 3 && (
        <Photos
          data={formData.step3Data}
          onDataChange={(data) => handleFormDataChange('step3Data', data)}
          onSubmit={handleSubmit}
          onBack={handleBack}
        />
      )}
      <div className="form-buttons">
        {currentStep === 3 ? (
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        ) : ("")}
      </div>
    </div>
  );
}

export default MultiStepForm;
