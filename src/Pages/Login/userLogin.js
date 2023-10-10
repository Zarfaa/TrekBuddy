import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { userLogin} from "../../Redux/Actions/auth.action";

const UserLogin = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const { isUserAuthenticated } = useSelector((state) => state.userAuth);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validateForm = () => {
    let isValid = true;


    if (!userData.email.includes("@")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email must contain @",
      }));
      isValid = false;
    }

    if (userData.password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const signupData = { ...userData };
      const trimmedPassword = userData.password.trim();

      dispatch(
        userLogin({ ...signupData, password: trimmedPassword }, (error) => {
          if (error) {
            toast.error(error);
          } else {
            toast.success(
              "Welcome to TrekBuddy. Your Registration was successful."
            );
          }
        })
      );
    } else {
      console.log("Form has errors");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  if (isUserAuthenticated) {
    toast("You have been loggedIn successfully.");
    return <Navigate replace to="/" />;
  }


  return (
    <>
      <form className="account_Container" onSubmit={handleSubmit}>

        <div className="ContentBorder">
          <h2 className="Title">User Login</h2>
      
          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={userData.email}
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
            value={userData.password}
            onChange={handleInputChange}
          />
          <i
            onClick={togglePasswordVisibility}
            className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
              } toggle-password field-icon`}
          ></i>
        </div>
        <Link to ="/sendOTP"><div><button type="button" className="Forget_password" >Forgot Password</button></div></Link>
        
          {errors.email && <p className="error-message">{errors.email}</p>}
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <div className="button_container">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserLogin;