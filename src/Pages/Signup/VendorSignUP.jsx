import "./Signup.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { registerVendor } from "../../Redux/Actions/VendorActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const VendorSignup = () => {
  const dispatch = useDispatch();
  const { isVendorAuthenticated, loading } = useSelector((state) => state.Vendor);
  const [loadingStates, setLoadingStates] = useState(false);
  const [vendorData, setvendorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    DateOfBirth: "",
    Gender: "",
    role: "",
    companyName: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    DateOfBirth: "",
    phoneNumber: "",
  });

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setvendorData({ ...vendorData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;


    if (!vendorData.email.includes("@")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email must contain @",
      }));
      isValid = false;
    }

    if (vendorData.password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters",
      }));
      isValid = false;
    }

    if (!vendorData.DateOfBirth) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        DateOfBirth: "Date of Birth is required",
      }));
      isValid = false;
    }

    if (!/^[0-9]*$/.test(vendorData.phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Contact Number must contain only numbers",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const signupData = { ...vendorData };
      const trimmedPassword = vendorData.password.trim();
      setLoadingStates(true)
      dispatch(registerVendor({ ...signupData, password: trimmedPassword }, setLoadingStates))
    }
  }

  if (isVendorAuthenticated) {
    return <Navigate replace to="/" />;
  }


  return (

    <form className="SignUp_Container" onSubmit={handleSubmit}>
      <p className="account mb-5">Already Have an account? <Link to="/vendorLogin" >Login</Link></p>
      <div className="mb-3">
        <h2 className="Title">Welcome!</h2>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="firstName">FirstName:</label>
          <input
            name="firstName"
            className="form-control"
            value={vendorData.firstName}
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
            value={vendorData.lastName}
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
          value={vendorData.email}
          type="email"
          id="email"
          className="form-control"
          required
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          value={vendorData.password}
          type="password"
          id="password"
          required
          className="form-control"
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="DateOfBirth">Date of Birth:</label>
        <input
          name="DateOfBirth"
          value={vendorData.DateOfBirth}
          placeholder="MM/DD/YY"
          className="form-control"
          id="DateOfBirth"
          onChange={handleInputChange}
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
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={vendorData.role}
          required
          className="form-control"
          onChange={handleInputChange}
        >
          <option value="vendor">Vendor</option>
          <option value="user">User</option>
        </select>
      </div>


      <div className="mb-3">
        <label htmlFor="phoneNumber">Contact Number:</label>
        <input
          name="phoneNumber"
          className="form-control"
          value={vendorData.phoneNumber}
          type="tel"
          id="phoneNumber"
          pattern="[0-9]*"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName">Company Name:</label>
        <input
          name="companyName"
          className="form-control"
          value={vendorData.companyName}
          type="text"
          id="companyName"
          onChange={handleInputChange}
        />
      </div>
      {errors.email && <p className="error-message">{errors.email}</p>}
      {errors.password && (
        <p className="error-message">{errors.password}</p>
      )}
      {errors.DateOfBirth && (
        <p className="error-message">{errors.DateOfBirth}</p>
      )}
      {errors.phoneNumber && (
        <p className="error-message">{errors.phoneNumber}</p>
      )}

      <div className="button_container">
        {loadingStates ? (
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </div>

    </form>

  );
};

export default VendorSignup