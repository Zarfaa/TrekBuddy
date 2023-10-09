import "./Signup.css"
import { Link } from "react-router-dom"

let VendorSignup = () => {
    return( <>
        <form className="account_Container">
        <p>Already Have an account?
          <Link to="/login" id="login">Login</Link></p>
        <div className="ContentBorder">
        <h2  className="Title">Sign Up</h2>
            <div>
        <label htmlFor="userName">Username:</label>
        <input type="text" id="userName" required/>
        </div>
     
     <div>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" required/>
    </div>
     
     <div>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" required/>
    </div>
    
    <div>
    <label htmlFor="companyName">company Name:</label>
    <input type="text" id="companyName" required/>
    </div>
    
    <div>
    <label htmlFor="dateOfBirth">Date of Birth:</label>
    <input type="date" id="dateOfBirth" required/>
    </div>
    
    <div>
    <label htmlFor="gender">Gender:</label>
      <input type="radio" id="genderMale" name="gender" value="male" required/>
      <label htmlFor="genderMale">Male</label>
      <input type="radio" id="genderFemale" name="gender" value="female" required/>
      <label htmlFor="genderFemale">Female</label>
    </div>

    
    <div>
    <label htmlFor="role">Role:</label>
    <select id="role" name="role" required>
      <option value="vendor">Vendor</option>
      <option value="user">User</option>
    </select>
    </div>

    <div>
    <label htmlFor="contactNumber">Contact Number:</label>
    <input type="tel" id="contactNumber" pattern="[0-9]*" required/>
    </div>
     
     <div className="button_container">
   <Link to ="/vendorportal"><button > Submit</button></Link> 
    </div>

    </div>
</form>
    </>
    )
}

export default VendorSignup