import ".././Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { vendorLogin } from "../../../Redux/Actions/VendorActions";

const VendorLogin = () => {
  const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const { isVendorAuthenticated } = useSelector((state) => state.Vendor);
  const loading = useSelector((state) => state.Vendor.loading);
  const [VendorData, setVendorData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  const handleInputChange = (e) => {
    setVendorData({ ...VendorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedPassword = VendorData.password.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=*]).{8,}$/;
    if (!VendorData.email.includes("@")) {
      setError({
        ...error,
        email: "Email must contain @",
      });
      return
    }
    if (!passwordRegex.test(trimmedPassword)) {
      setError({
        ...error,
        password: "Password must be at least 8 characters",
      });
      return
    }
    setLoadingStates(true)
    dispatch(vendorLogin({ ...VendorData, password: trimmedPassword}, setLoadingStates));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  if (isVendorAuthenticated) {
    return <Navigate replace to="/" />;
  }


  return (
    <>
      <form className="account_Container" onSubmit={handleSubmit}>

        <div className="ContentBorder">
          <h2 className="Title">Vendor Login</h2>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              name="email"
              value={VendorData.email}
              type="email"
              id="email"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="input-with-icon">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              autoComplete="password"
              value={VendorData.password}
              onChange={handleInputChange}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                } toggle-password field-icon`}
            ></i>
          </div>
          <Link to="/sendOTP"><div><button type="button" className="Forget_password" >Forgot Password</button></div></Link>

          {error.email && <p className="error-message">{error.email}</p>}
          {error.password && (
            <p className="error-message">{error.password}</p>
          )}
          <div className="button_container">
            <button type="submit">
              {loadingStates ? (
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              ) : (
                ""
              )}
              Submit</button>
          </div>
          
        </div>
      </form>
    </>
  );
};

export default VendorLogin;