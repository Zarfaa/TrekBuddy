import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../Redux/Actions/auth.action";
import { useDispatch } from "react-redux";

const AccountSetting = () => {
  const dispatch = useDispatch();
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
    dispatch(login(AccountData, setError));
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
    <div>
      <h1 >Account Setting</h1>
      <div className="fxt-form">
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
            <div className="fxt-transformY-50 fxt-transition-delay-2">
              <div className="input-with-icon">
                <input
                  id="Currentpassword"
                  type={showPassword ? "text" : "Currentpassword"}
                  className="form-control mb-3"
                  name="Currentpassword"
                  placeholder="Currentpassword"
                  required="required"
                  autoComplete="Currentpassword"
                  value={AccountData.Currentpassword}
                  onChange={(e) => onChange(e)}
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
                  placeholder="Newpassword"
                  required="required"
                  autoComplete="Newpassword"
                  value={AccountData.Newpassword}
                  onChange={(e) => onChange(e)}
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
                  type={showPassword ? "text" : "Confirmpassword"}
                  className="form-control mb-3"
                  name="Confirmpassword"
                  placeholder="Confirmpassword"
                  required="required"
                  autoComplete="Confirmpassword"
                  value={AccountData.Confirmpassword}
                  onChange={(e) => onChange(e)}
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
              <button type="submit" className="btn btn-primary">
                {loading ? (
                  <div class="spinner-border text-light" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  ""
                )}
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AccountSetting