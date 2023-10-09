import "./Login.css"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Redux/Actions/auth.action";
import { useDispatch, useSelector } from "react-redux";

let Login = () => {
    const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true); 
  const [loading , setLoading] = useState(false)
  const {isAuthenticated } = useSelector((state) => state.auth);

  const onChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!loginData.email.includes("@"))
    {
      setError({...error , email:"Email must include @"})
      return
    }
    setLoading(true)
    dispatch(login(loginData, setError));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (error) {
    toast.error(error.detail);
    setError(null);
  }

  if (isAuthenticated) {
    toast("You have been loggedIn successfully.");
    return <Navigate replace to="/" />;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
 

    return( <>
        <form className="Container" onSubmit={(e) => onSubmit(e)}>
        <div className="ContentBorder">
            <h1  className="Title">Login</h1>
            <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" required    value={loginData.username}
                    onChange={(e) => onChange(e)}/>
        </div>    
     
     <div>
    <label htmlFor="password">Password:</label>
    <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    required="required"
                    autoComplete="password"
                    value={loginData.password}
                    onChange={(e) => onChange(e)}
                  />
                  <i
                    onClick={togglePasswordVisibility} 
                    className={`fa fa-fw ${
                      showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                  ></i>
    </div>

    <Link to ="/OTP"><div><button type="button" className="Forget_password" >Forgot Password</button></div></Link>
        
    <div>
    <label htmlFor="role">Role:</label>
    <select id="role" name="role" required>
      <option value="vendor">Vendor</option>
      <option value="user">User</option>
    </select>
    </div>

     <div className="button_container">
    <button className="button" type="submit"> Submit</button>
    </div>
    </div>
</form>
    </>
    )
}

export default Login