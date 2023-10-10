import "./Signup.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerUser} from "../../Redux/Actions/auth.action";

const UserSignup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    role: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    dateOfBirth: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const validateForm = () => {
    let isValid = true;

    // Validate email
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
    if (!userData.dateOfBirth) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        dateOfBirth: "Date of Birth is required",
      }));
      isValid = false;
    }

    // Validate contact number
    if (!/^[0-9]*$/.test(userData.contactNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contactNumber: "Contact Number must contain only numbers",
      }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const signupData = { ...userData };
      const trimmedPassword = userData.password.trim();
  
      try {
        await dispatch(registerUser({ ...signupData, password: trimmedPassword }));
        toast.success("Welcome to TrekBuddy. Your Registration was successful.");
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error( "Registration failed");
      }
    } else {
      console.log("Form has errors");
    }
  };
  

  return (
    <>
      <form className="account_Container" onSubmit={handleSubmit}>
        <p>
          Already Have an account? <Link to="/login" id="login">Login</Link>
        </p>
        <div className="ContentBorder">
          <h2 className="Title">Sign Up</h2>
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              name="userName"
              value={userData.userName}
              type="text"
              id="userName"
              required
              onChange={handleInputChange }
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
              onChange={handleInputChange }
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
              onChange={handleInputChange }
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              name="dateOfBirth"
              value={userData.dateOfBirth}
              type="date"
              id="dateOfBirth"
              onChange={handleInputChange }
              required
            />
          </div>

          <div>
            <label>Gender:</label>
            <input
              name="gender"
              value="male"
              type="radio"
              id="genderMale"
              onChange={handleInputChange }
              required
            />
            <label htmlFor="genderMale">Male</label>
            <input
              name="gender"
              value="female"
              type="radio"
              id="genderFemale"
              onChange={handleInputChange }
              required
            />
            <label htmlFor="genderFemale">Female</label>
          </div>

          <div>
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" value={userData.role} required  onChange={handleInputChange }>
              <option value="vendor">Vendor</option>
              <option value="user">User</option>
            </select>
          </div>

          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              name="contactNumber"
              value={userData.contactNumber}
              type="tel"
              id="contactNumber"
              pattern="[0-9]*"
              onChange={handleInputChange }
              required
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}
        {errors.password && <p className="error-message">{errors.password}</p>}
        {errors.dateOfBirth && <p className="error-message">{errors.dateOfBirth}</p>}
        {errors.contactNumber && <p className="error-message">{errors.contactNumber}</p>}

          <div className="button_container">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserSignup;
