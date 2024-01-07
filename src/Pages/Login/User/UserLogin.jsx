import ".././Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { userLogin } from "../../../Redux/Actions/UserActions";

const UserLogin = () => {
  const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const isUserAuthenticated  = useSelector((state) => state.User.isUserAuthenticated);
  const loading  = useSelector((state) => state.User.loading);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setLoadingStates(true);
    dispatch(userLogin({ ...userData },setLoadingStates))
    setUserData({
      email: "",
      password: "",
    })
    
  };
  
  const togglePasswordVisibility = () => {
    
    setShowPassword(!showPassword);
  };

  if (isUserAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return (
      <form className="Login_Container" onSubmit={handleSubmit}>
          <h2 className="Title">Welcome Back!</h2>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              name="email"
              placeholder="email"
              value={userData.email}
              type="email"
              id="email"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="input-with-icon mb-3">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              autoComplete="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                }  field-icon`}
            ></i>
          </div>

          <Link to="/sendUserOTP"><div><button type="button" className="Forget_password" >Forgot Password?</button></div></Link>
          <div className="button_container">
            <button type="submit">
              {loadingStates ? (
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                ""
              )}
              Login</button>
          </div>
      </form>
  );
};

export default UserLogin;