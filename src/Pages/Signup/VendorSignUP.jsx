import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerVendor} from "../../Redux/Actions/VendorActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const VendorSignup = () => {
  const dispatch = useDispatch();
  const { isVendorAuthenticated } = useSelector((state) => state.Vendor);
  const [userData, setUserData] = useState({
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

    if (!userData.DateOfBirth) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        DateOfBirth: "Date of Birth is required",
      }));
      isValid = false;
    }

    if (!/^[0-9]*$/.test(userData.phoneNumber)) {
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
      const signupData = { ...userData };
      const trimmedPassword = userData.password.trim();

      dispatch(
        registerVendor({ ...signupData, password: trimmedPassword }, (error) => {
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

  if (isVendorAuthenticated) {
    return <Navigate replace to="/" />;
  }


  return (
    <>
      <form className="account_Container" onSubmit={handleSubmit}>
        <p>
          Already Have an account?{" "}
          <Link to="/vendorLogin" id="login">
            Login
          </Link>
        </p>
        <div className="ContentBorder">
          <h2 className="Title">Vendor Sign Up</h2>
          <div>
            <label htmlFor="firstName">FirstName:</label>
            <input
              name="firstName"
              value={userData.firstName}
              type="text"
              id="firstName"
              className="form-control"
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">LastName:</label>
            <input
              name="lastName"
              value={userData.lastName}
              type="text"
              id="lastName"
              className="form-control"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              value={userData.email}
              type="email"
              id="email"
              className="form-control"
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              value={userData.password}
              type="password"
              id="password"
              required
              className="form-control"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="DateOfBirth">Date of Birth:</label>
            <input
              name="DateOfBirth"
              value={userData.DateOfBirth}
              placeholder="MM/DD/YY"
              className="form-control"
              id="DateOfBirth"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label>Gender:</label>
            <label htmlFor="GenderMale">Male</label>
            <input
              name="Gender"
              value="Male"
              type="radio"
              id="GenderMale"
              onChange={handleInputChange}
              required
            />
            <label htmlFor="GenderFemale">Female</label>
            <input
              name="Gender"
              value="Female"
              type="radio"
              id="GenderFemale"
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={userData.role}
              required
              className="form-control"
              onChange={handleInputChange}
            >
              <option value="vendor">Vendor</option>
              <option value="user">User</option>
            </select>
          </div>

          <div>
            <label htmlFor="phoneNumber">Contact Number:</label>
            <input
              name="phoneNumber"
              className="form-control"
              value={userData.phoneNumber}
              type="tel"
              id="phoneNumber"
              pattern="[0-9]*"
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Company Name:</label>
            <input
              name="companyName"
              className="form-control"
              value={userData.companyName}
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
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default VendorSignup;