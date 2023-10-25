import React, { useState } from 'react';
import { sendUserOTP } from "../../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const SendOTP = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const { isSuccess} = useSelector((state) => state.User);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendUserOTP(email));
  };

  if ( isSuccess) {
    toast("OTP sent! Check Your Email");
    return <Navigate replace to="/verifyOTP" />;
  }

  return (
    <div style={{ margin: "10% 30%", padding: "5%" }} className='card'>
      <h1>Forgot Password</h1>
      <form className="mt-5" onSubmit={handleSubmit} >
        <div className="mb-3">
          <input
            type="email"
            className="form-control mb-3"
            placeholder='Enter your email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>We’ll send a verification code to this email if it matches an existing account.</span>
        </div>

        <button type="submit" className="btn mt-3 form-control" style={{ backgroundColor: "#41b354", color: "white" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default SendOTP;
