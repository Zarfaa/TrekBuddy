import React, { useState, useEffect } from 'react';
import { verifyUserOTP, resendUserOTP } from "../../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import '.././OTP.css'
const VerifyOTP = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [loadingStates, setLoadingStates] = useState(false);
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const { loading } = useSelector((state) => state.User);

  const handleSubmit = async (e) => {
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);
    e.preventDefault();
    setLoadingStates(true)
    dispatch(verifyUserOTP(otp, userId, setIsVerified, setLoadingStates));
  };

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  if (isVerified) {
    return <Navigate replace to="/resetUserpassword" />;
  }

  const handleResend = (e) => {
    e.preventDefault();
    setLoadingStates(true);
    dispatch(resendUserOTP(email, setLoadingStates));
  };

  return (
    <div style={{ margin: "5% 30%", padding: "5%" ,   'background-color': '#d7eaa8' }} className='card'>
      <Link to="/sendUserOTP"><button type="submit" className="back-btn">
        Go Back
      </button></Link>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-3"
            id="confirmOTP"
            placeholder='Enter Verification Code Here'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <span>Enter OTP Sent to your Email!</span>
        </div>
        <button type="submit" className="verify-btn">
          {loadingStates ? (
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
          Verify OTP
        </button>
        <div className='mt-2'>Haven't Received an OTP? <button type="button" className='resend-OTP' onClick={handleResend}> Resend Code</button></div>

      </form>
    </div>
  );
};

export default VerifyOTP;
