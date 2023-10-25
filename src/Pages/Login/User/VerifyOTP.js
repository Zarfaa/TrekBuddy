import React, { useState } from 'react';
import { verifyUserOTP } from "../../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
const ConfirmOTP = () => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(verifyUserOTP(otp));
  };

  return (
    <div style={{margin:"10% 30%", padding: "5%"}} className='card'>
    <h1 className='ms-5'>Verify OTP</h1>
    <form onSubmit={handleSubmit}  style={{margin:"10%"}}>
      <div className="mb-3">
        <input
          type="number"
          className="form-control mb-3"
          id="confirmOTP"
          placeholder='Enter Verification Code Here'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <span>Enter OTP Sent to your Email!</span>
      </div>
      <Link to="/resetpassword"><button type="submit" className="btn" style={{ backgroundColor: "#41b354", color: "white" }}>
        Verify
      </button></Link> 
    </form>
    </div>
  );
};

export default ConfirmOTP;
