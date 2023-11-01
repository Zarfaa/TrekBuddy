import React, { useState , useEffect} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetUserpassword } from "../../../Redux/Actions/UserActions";
import { useDispatch , useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { loading, passwordSuccess } = useSelector((state) => state.User);
  const [error, setError] = useState("");
  const [loadingStates, setLoadingStates] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [AccountData, setAccountData] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  
  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountData({ ...AccountData, [name]: value });
  }

  const handleSubmit = async (e) => {
    const userId = localStorage.getItem("userId");
    e.preventDefault();
    setLoadingStates(true);
   dispatch(resetUserpassword({...AccountData} , userId , setLoadingStates));
  
  };
  
  if (error) {
    setError(error.message);
  }

  if(passwordSuccess){
    toast.success("Password Reset Successfull!")
    return <Navigate replace to="/" />;
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div style={{ margin: "10% 30%", padding: "5%" }} className='card'>
      <h1 >Set a New Password</h1>
      <div className="fxt-form">
        <form onSubmit={handleSubmit}  >

          <div className="input-with-icon">
            <input
              name="newPassword"
              type={showPassword ? "text" : "password"}
              className="form-control mb-3 "
              placeholder="New Password"
              required
              value={AccountData.newPassword}
              onChange={handleInputChange}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa fa-fw ${showPassword ? "fa-eye-slash" : "fa-eye"
                } toggle-password field-icon`}
            ></i>
          </div>

          <div className="input-with-icon">
            <input
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              className="form-control mb-3"
              placeholder="confirmPassword"
              required
              autoComplete="Confirmpassword"
              value={AccountData.confirmPassword}
              onChange={handleInputChange}
            />
            <i
              onClick={togglePasswordVisibility}
              className={`fa fa-fw ${showPassword ? "fa-eye-slash" : "fa-eye"
                } toggle-password field-icon`}
            ></i>
          </div>

          <div className="form-group">
            <button type="submit" className="btn" style={{ backgroundColor: "#41b354", color: "white" }}>
            {loadingStates ? (
                 <div class="spinner-border text-light" role="status">
                 <span class="visually-hidden">Loading...</span>
               </div>
                ) : (
                  ""
                )}
                Update
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword