import "./Signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerUser} from "../../Redux/Actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UserSignup = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const { isUserAuthenticated } = useSelector((state) => state.userAuth);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    DateOfBirth: "",
    Gender: "",
    role: "",
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

    // Validate password
    if (userData.password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters",
      }));
      isValid = false;
    }

    // Validate date of birth (you might want to add more specific validation)
    if (!userData.DateOfBirth) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        DateOfBirth: "Date of Birth is required",
      }));
      isValid = false;
    }

    // Validate contact number
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
      // Form submission logic goes here
      console.log("Form submitted:", userData);

      // Assuming signupData and trimmedPassword are defined somewhere in your code
      const signupData = { ...userData };
      const trimmedPassword = userData.password.trim();

      dispatch(
        registerUser({ ...signupData, password: trimmedPassword }, (error) => {
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
    return <Navigate replace to="/" />;
  }



  return (
    <>
      <form className="account_Container" onSubmit={handleSubmit}>
        <p>
          Already Have an account?{" "}
          <Link to="/userLogin" >
            Login
          </Link>
        </p>
        <div className="ContentBorder">
          <h2 className="Title">User Sign Up</h2>
          <div>
            <label htmlFor="firstName">FirstName:</label>
            <input
              name="firstName"
              value={userData.firstName}
              type="text"
              id="firstName"
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
              required
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

          <div>
            <label htmlFor="DateOfBirth">Date of Birth:</label>
            <input
              name="DateOfBirth"
              value={userData.DateOfBirth}
              placeholder="MM/DD/YY"
              id="DateOfBirth"
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label>Gender:</label>
            <label htmlFor="GenderMale">Male
            <input
              name="Gender"
              value="Male"
              type="radio"
              id="GenderMale"
              onChange={handleInputChange}
              required
            />
            </label>
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
              value={userData.phoneNumber}
              type="tel"
              id="phoneNumber"
              pattern="[0-9]*"
              onChange={handleInputChange}
              required
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

export default UserSignup;