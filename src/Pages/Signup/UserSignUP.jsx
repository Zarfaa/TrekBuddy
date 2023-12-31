import "./Signup.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerUser } from "../../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserSignup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loadingStates, setLoadingStates] = useState(false);
  const loading = useSelector((state) => state.User.loading);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    DateOfBirth: "",
    Gender: "",
    role: "User",
    phoneNumber: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    DateOfBirth: "",
    phoneNumber: "",
  });


  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedPassword = userData.password.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
    if (!userData.email.includes("@")) {
      setError({
        ...error,
        email: "Email must contain @",
      });
      return;
    }
    if (!passwordRegex.test(trimmedPassword)) {
      setError({
        ...error,
        password: "Password must be at least 8 characters with at least 1 UpperCase,LowerCase,number and special character.",
      });
      return;
    }
    if (!userData.DateOfBirth) {
      setError({
        ...error,
        DateOfBirth: "Date of Birth is required",
      });
      return;
    }
    if (!/^[0-9]*$/.test(userData.phoneNumber)) {
      setError({
        ...error,
        phoneNumber: "Contact Number must contain only numbers",
      });
      return;
    }
    setLoadingStates(true);
    dispatch(registerUser({ ...userData, password: trimmedPassword }, setLoadingStates, setSignupSuccess, setError))
    setUserData(
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        DateOfBirth: "",
        Gender: "",
        role: "User",
        phoneNumber: ""
      })
  };

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  if (signupSuccess) {
    return <Navigate replace to="/" />
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="SignUp_Container" onSubmit={handleSubmit}>
      <p className="account mb-5">Already Have an account? <Link to="/userLogin" >Login</Link>
      </p>
      <div className="mb-3">
        <h2 className="Title">Welcome!</h2>
      </div>
      <div className="row mb-3">
        <div className="col-6">
        <label htmlFor="firstName">FirstName:</label>
        <input
          name="firstName"
          className="form-control"
          value={userData.firstName}
          type="text"
          id="firstName"
          required
          onChange={handleInputChange}
        />
        </div>
        <div className="col-6">
        <label htmlFor="lastName">LastName:</label>
        <input
          name="lastName"
          value={userData.lastName}
          className="form-control"
          type="text"
          id="lastName"
          required
          onChange={handleInputChange}
        />
        </div>
        </div>

      <div className="mb-3">
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={userData.email}
          className="form-control"
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
            } toggle-password field-icon`}
        ></i>
      </div>

      <div className="mb-3">
        <label htmlFor="DateOfBirth">Date of Birth:</label>
        <input
          name="DateOfBirth"
          value={userData.DateOfBirth}
          placeholder="MM/DD/YY"
          id="DateOfBirth"
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <div className="row">
          <label>Gender:</label>
        </div>

        <div className="row">
          <div className="form-check ms-3">
            <label className="form-check-label" htmlFor="GenderMale">
              Male
              <input
                className="form-check-input"
                name="Gender"
                value="Male"
                type="radio"
                id="GenderMale"
                onChange={handleInputChange}
                required
              />
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="GenderFemale">
              Female
              <input
                className="form-check-input"
                name="Gender"
                value="Female"
                type="radio"
                id="GenderFemale"
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
        </div>
      </div>


      <div className="mb-3">
        <label htmlFor="phoneNumber">Contact Number:</label>
        <input
          name="phoneNumber"
          value={userData.phoneNumber}
          type="tel"
          id="phoneNumber"
          pattern="[0-9]*"
          className="form-control"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="button_container">
        <button type="submit">
          {loadingStates ? (
            <div class="spinner-border text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
        <div style={{ color: 'red' }}>
          {error.email && <p>{error.email}</p>}
          {error.password && <p>{error.password}</p>}
          {error.DateOfBirth && <p>{error.DateOfBirth}</p>}
          {error.phoneNumber && <p>{error.phoneNumber}</p>}
          {error.message && <p>{error.message}</p>}
        </div>

      </div>
    </form>

  );
};

export default UserSignup;