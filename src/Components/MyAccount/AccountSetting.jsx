import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AccountSetting = () => {
  const [AccountData, setAccountData] = useState({
    Currentpassword: "",
    Newpassword: " ",
    Confirmpassword: " "
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false)


  const onChange = (e) =>
    setAccountData({ ...AccountData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(AccountData.password)) {
      setError({ ...error, password: "Password must be at least 8 characters with one capital letter and one symbol" });
      return;
    }

    setLoading(true)
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='Profile_Data'>
      <h1 >Change Password</h1>
      <div className="fxt-form">
        <form onSubmit={(e) => onSubmit(e)}>
                <input
                  id="Currentpassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-3"
                  placeholder="Current Password"
                  required
                  autoComplete="Currentpassword"
                  value={AccountData.Currentpassword}
                  onChange={(e) => onChange(e)}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                ></i>
           
                <input
                  id="Newpassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-3 "
                  placeholder="New Password"
                  required
                  value={AccountData.Newpassword}
                  onChange={(e) => onChange(e)}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                ></i>
        
                <input
                  id="Confirmpassword"
                  type={showPassword ? "text" : "password"}
                  className="form-control mb-3"
                  placeholder="Confirm Password"
                  required
                  autoComplete="Confirmpassword"
                  value={AccountData.Confirmpassword}
                  onChange={(e) => onChange(e)}
                />
                <i
                  onClick={togglePasswordVisibility}
                  className={`fa fa-fw ${showPassword ? "fa-eye" : "fa-eye-slash"
                    } toggle-password field-icon`}
                ></i>
        
              <button type="submit" className="btn form-control " style={{ backgroundColor: "#41b354", color: "white" }}>
                {loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden ">Loading...</span>
                  </div>
                ) : (
                  ""
                )}
                Reset
              </button>
        
        </form>
      </div>
    </div>
  )
}

export default AccountSetting