import React, { useState, useEffect } from 'react';
import { sendUserOTP} from "../../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SendOTP = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [loadingStates, setLoadingStates] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { loading } = useSelector((state) => state.User);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStates(true);
    dispatch(sendUserOTP(email,setIsSuccess, setLoadingStates));
  };


  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  if (isSuccess) {
    return <Navigate replace to="/verifyUserOTP" />;
  }

  return (
    <div style={{backgroundColor: "#d7eaa8", margin: "10% 30%", padding: "5%" }} className='card'>
      <h1 className="mb-2">Forgot Password</h1>
        <div className="mb-3">
          <input
            type="email"
            className="form-control mb-3"
            placeholder='Enter your email'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>We’ll send a verification code to this email if it matches an existing account.</span>
        </div>

        <button type="submit" className="btn mt-3 form-control" onClick={handleSubmit} style={{ backgroundColor: "#556b2f ", color: "white" }}>
          {loadingStates ? (
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
          Send
        </button>
    </div>
  );
};

export default SendOTP;
