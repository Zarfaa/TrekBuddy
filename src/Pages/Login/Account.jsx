import React from 'react'
import { Link } from 'react-router-dom'
import "./Account.css"
const Account = () => {
  return (
    <div className='Account_container'>
      <h3>TrekBuddy - Your Pathway to Pakistan's Northren Bliss</h3>
      <h4>Welcome Back!</h4>
      <span style={{marginLeft:"19vw"}}>Login as a user or vendor</span>
      <div className='Flex'>
      <Link to="/userlogin"><div><button type="button" className="btn btn-color"><i class="fa-solid fa-users signup-icon"></i>User</button></div></Link>
      <Link to="/vendorlogin"><div><button type="button" className="btn btn-color"><i className="fa-solid fa-store signup-icon"></i>Vendor</button></div></Link>
      </div>
      <p>Don't have an account?<Link to="/login"> <span className='Login-text'>Signup</span></Link></p>
    </div>
  )
}

export default Account
