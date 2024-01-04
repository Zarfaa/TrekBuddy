import "./NavBar.css"
import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let NavBar = () => {
  const { isUserAuthenticated } = useSelector((state) => state.User);
  const { isVendorAuthenticated } = useSelector((state) => state.Vendor);
  return (
    <nav>
      <div className="nav_container">

        <div>
          <Link to="/" className="nav_logo">Trek Buddy</Link>
        </div>

        <div className="nav_items">
          <div>
            <Link id="text" to="/">Home</Link>
          </div>
          <div>
            <Link id="text" to="/destinations">Destinations</Link>
          </div>
        </div>
        {!isUserAuthenticated &&  !isVendorAuthenticated &&(
        <div className="nav_btns">
            <div>
              <Link id="text" to="/login">Login</Link>
            </div>
            <div>
              <Link id="text" to="/register"><button className="nav_btn">Signup</button></Link>
            </div>
          </div>
        )}

        {isUserAuthenticated && (
          <Link id="text"  to="/myaccount">My Account</Link>
    
        )}

        {isVendorAuthenticated && (
          <div><Link id="text" to="/vendorportal">Vendor Dashboard</Link></div>
        )}

      </div>
    </nav>
  )
}
export default NavBar