import React from 'react'
import { Link } from 'react-router-dom'
import "./Account.css"
const Account = () => {
  return (
    <div className='Account_container'>
      <h3>TrekBuddy - Your Pathway to Pakistan's Northren Bliss</h3>
      <h4>Register as a User or Vendor</h4>
      <div className='Flex'>
      <Link to="/usersignup"><div><button type="button" className="btn btn-color"><i class="fa-solid fa-users signup-icon"></i>User</button></div></Link>
      <Link to="/vendorsignup"><div><button type="button" className="btn btn-color"><i className="fa-solid fa-store signup-icon"></i>Vendor</button></div></Link>
      </div>
      <p>Already have an account?<Link to="/register"> <span className='Login-text'>Login</span></Link></p>
    </div>
  )
}

export default Account
