import "./NavBar.css"
import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

let NavBar = () => {
  const isUserAuthenticated = useSelector((state) => state.userAuth.isUserAuthenticated);
  const isVendorAuthenticated = useSelector((state) => state.vendorAuth.isVendorAuthenticated);
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
            <Link id="text" to="/myaccount">Destinations</Link>
          </div>
        </div>
        {isUserAuthenticated ? (
          <Link id="text" to="/myaccount">My Account</Link>
        ) : (
          <div className="dropdown">
            <button className="dropbtn" id="text"><i className="fa fa-fw fa-user"></i>Signup </button>
            <div className="dropdown-content">
              <Link to="/UserSignUP">Signup as User</Link>
              <Link to="/VendorSignUP">Signup as Vendor</Link>
            </div>
          </div>
        )}

        {isVendorAuthenticated && (
          <>
            <div><Link id="text" to="/vendorportal">Vendor Dashboard</Link></div>
            <div><Link id="text" to="/listproperty">List Property</Link></div>
          </>
        )}

      </div>
    </nav>
  )
}
export default NavBar