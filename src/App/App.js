import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar"
import Home from '../Pages/Home/index';
import UserSignup from "../Pages/Signup/UserSignUP"
import VendorSignup from "../Pages/Signup/VendorSignUP"
import UserLogin from "../Pages/Login/userLogin"
import VendorLogin from "../Pages/Login/vendorLogin"
import OTP from '../Pages/Login/OTP';
import Footer from "../Components/Footer/Footer"
import ListProperty from '../Components/ListProperty/index';
import VendorPortal from '../Components/VendorAccount/index';
import MultiStepForm from '../Components/ListProperty/Form';
import MyAccount from '../Components/MyAccount';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import ConfirmOTP from '../Pages/Login/ConfirmOTP';
import ResetPassword from '../Pages/Login/ResetPassword';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/UserSignup" element={<UserSignup />}></Route>
            <Route path="/VendorSignup" element={<VendorSignup />}></Route>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/userLogin" element={<UserLogin />}></Route>
            <Route path="/vendorLogin" element={<VendorLogin />}></Route>
            <Route path="/OTP" element={<OTP />}></Route>
            <Route path="/ConfirmOTP" element={<ConfirmOTP />}></Route>
            <Route path="/resetpassword" element={<ResetPassword />}></Route>
            <Route path="/listproperty" element={<ListProperty />}></Route>
            <Route path="/vendorportal" element={<VendorPortal />}></Route>
            <Route path="/listing" element={<MultiStepForm />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
