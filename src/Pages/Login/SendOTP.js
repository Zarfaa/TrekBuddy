import React, { useState } from 'react';
import { send_OTP } from "../../Redux/Actions/auth.action";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
const SendOTP = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(send_OTP(email));
  };

  return (
    <div style={{margin:"10% 30%", padding: "5%"}} className='card'>
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
      
     <Link to="/verifyOTP"><button type="submit" className="btn mt-3 form-control" style={{ backgroundColor: "#41b354", color: "white" }}>
        Send
      </button></Link> 
    </form>
    </div>
  );
};

export default SendOTP;
