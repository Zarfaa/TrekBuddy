import React, { useState,  useEffect } from 'react';
import { verifyVendorOTP } from "../../../Redux/Actions/VendorActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmOTP = () => {
  const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);
  const [otp, setOtp] = useState('');
  const { isVerified, loading } = useSelector((state) => state.Vendor);

  const handleSubmit = async (e) => {
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);
    e.preventDefault();
    setLoadingStates(true)
    dispatch(verifyVendorOTP(otp, userId ,setLoadingStates));
  };

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);


  if (isVerified) {
    toast("OTP sent! Set Your Password");
    return <Navigate replace to="/resetpassword" />;
  }

  return (
    <div style={{ margin: "10% 30%", padding: "5%" }} className='card'>
      <h1 className='ms-5'>Verify OTP</h1>
      <form onSubmit={handleSubmit} style={{ margin: "10%" }}>
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
        <button type="submit" className="btn" style={{ backgroundColor: "#41b354", color: "white" }}>
        {loadingStates ? (
                 <div class="spinner-border text-light" role="status">
                 <span class="visually-hidden">Loading...</span>
               </div>
                ) : (
                  ""
                )}
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default ConfirmOTP;
