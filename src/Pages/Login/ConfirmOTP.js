import React, { useState } from 'react';

const ConfirmOTP = () => {
  const [otp, setOtp] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP submitted:', otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="confirmOTP" className="form-label">
          Enter OTP
        </label>
        <input
          type="number"
          className="form-control"
          id="confirmOTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default ConfirmOTP;
