import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Pages/Home/index';
import UserSignup from "../Pages/Signup/UserSignUP"
import VendorSignup from "../Pages/Signup/VendorSignUP"
import UserLogin from "../Pages/Login/User/UserLogin"
import VendorLogin from "../Pages/Login/Vendor/VendorLogin"
import Footer from "../Components/Footer/Footer"
import ListProperty from '../Components/ListProperty/index';
import VendorPortal from '../Components/VendorAccount/index';
import MultiStepForm from '../Components/ListProperty/Form';
import MyAccount from '../Components/MyAccount';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import SendUserOTP from '../Pages/Login/User/SendUserOTP';
import VerifyUserOTP from '../Pages/Login/User/VerifyUserOTP';
import ResetUserPassword from '../Pages/Login/User/ResetUserPassword';
import SendVendorOTP from '../Pages/Login/Vendor/SendVendorOTP';
import VerifyVendorOTP from '../Pages/Login/Vendor/VerifyVendorOTP';
import ResetVendorPassword from '../Pages/Login/Vendor/ResetVendorPassword';
import Destinations from '../Pages/Destinations';
import Account from "../Pages/Account"
import Login from "../Pages/Login/Account"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/destinations" element={<Destinations />}></Route>
            <Route path="/usersignup" element={<UserSignup />}></Route>
            <Route path="/vendorsignup" element={<VendorSignup />}></Route>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/userlogin" element={<UserLogin />}></Route>
            <Route path="/vendorlogin" element={<VendorLogin />}></Route>
            <Route path="/sendUserOTP" element={<SendUserOTP />}></Route>
            <Route path="/verifyUserOTP" element={<VerifyUserOTP />}></Route>
            <Route path="/resetUserpassword" element={<ResetUserPassword />}></Route>
            <Route path="/sendVendorOTP" element={<SendVendorOTP />}></Route>
            <Route path="/verifyVendorOTP" element={<VerifyVendorOTP />}></Route>
            <Route path="/resetVendorpassword" element={<ResetVendorPassword />}></Route>
            <Route path="/listproperty" element={<ListProperty />}></Route>
            <Route path="/vendorportal" element={<VendorPortal />}></Route>
            <Route path="/listing" element={<MultiStepForm />}></Route>
            <Route path="/register" element={<Account />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
