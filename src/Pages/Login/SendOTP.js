import React, { useState } from 'react';
import { send_OTP } from "../../Redux/Actions/auth.action";
import { useDispatch } from "react-redux";

const SendOTP = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(send_OTP(email));
  };

  return (
    <form className="" onSubmit={handleSubmit} style={{margin:"10%"}}>
      <div className="mb-3">
        <label htmlFor="SendOTP" className="form-label">
          Enter Your Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn" style={{ backgroundColor: "#41b354", color: "white" }}>
        Send
      </button>
    </form>
  );
};

export default SendOTP;
