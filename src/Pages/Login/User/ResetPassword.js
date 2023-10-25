import React, { useState} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetUserpassword } from "../../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const [AccountData, setAccountData] = useState({
    Currentpassword: "",
    Newpassword: " ",
    Confirmpassword: " "
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const inputHandler = (e) =>
    setAccountData({ ...AccountData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(AccountData.password)) {
      setError({ ...error, password: "Password must be at least 8 characters with one capital letter and one symbol" });
      return;
    }

    dispatch(resetUserpassword (AccountData, setError));
  };



  if (error) {
    toast.error(error.detail);
    setError(null);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div  style={{margin:"10% 30%", padding: "5%"}} className='card'>
      <h1 >Reset Password</h1>
      <div className="fxt-form">
        <form onSubmit={handleSubmit}  >
        <div className="form-group">
            <div className="fxt-transformY-50 fxt-transition-delay-2">
              <div className="input-with-icon">
                <input
                  id="Currentpassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-3"
                  name="Currentpassword"
                  placeholder="Currentpassword"
                  required="required"
                  autoComplete="Currentpassword"
                  value={AccountData.Currentpassword}
                  onChange={inputHandler}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                ></i>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="fxt-transformY-50 fxt-transition-delay-2">
              <div className="input-with-icon">
                <input
                  id="Newpassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-3 "
                  name="Newpassword"
                  placeholder="New Password"
                  required="required"
                  autoComplete="Newpassword"
                  value={AccountData.Newpassword}
                  onChange={inputHandler}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                ></i>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="fxt-transformY-50 fxt-transition-delay-2">
              <div className="input-with-icon">
                <input
                  id="Confirmpassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-3"
                  name="Confirmpassword"
                  placeholder="Confirmpassword"
                  required="required"
                  autoComplete="Confirmpassword"
                  value={AccountData.Confirmpassword}
                  onChange={inputHandler}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                ></i>
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="fxt-transformY-50 fxt-transition-delay-4">
              <button type="submit" className="btn" style={{ backgroundColor: "#41b354", color: "white" }}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword