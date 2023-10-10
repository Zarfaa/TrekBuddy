import React, { useState } from 'react';
import { verify_OTP } from "../../Redux/Actions/auth.action";
import { useDispatch } from "react-redux";

const ConfirmOTP = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(verify_OTP(otp));
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
