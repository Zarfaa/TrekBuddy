import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../Pages/Home/index';
import UserSignup from "../Pages/Signup/UserSignUP"
import VendorSignup from "../Pages/Signup/VendorSignUP"
import UserLogin from "../Pages/Login/userLogin"
import VendorLogin from "../Pages/Login/vendorLogin"
import SendOTP from '../Pages/Login/SendOTP';
import ReSendOTP from '../Pages/Login/resendOTP';
import Footer from "../Components/Footer/Footer"
import ListProperty from '../Components/ListProperty/index';
import VendorPortal from '../Components/VendorAccount/index';
import MultiStepForm from '../Components/ListProperty/Form';
import MyAccount from '../Components/MyAccount';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import ConfirmOTP from '../Pages/Login/VerifyOTP';
import ResetPassword from '../Pages/Login/ResetPassword';
import Destinations from '../Pages/Destinations';
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
            <Route path="/UserSignup" element={<UserSignup />}></Route>
            <Route path="/VendorSignup" element={<VendorSignup />}></Route>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/userLogin" element={<UserLogin />}></Route>
            <Route path="/vendorLogin" element={<VendorLogin />}></Route>
            <Route path="/sendOTP" element={<SendOTP />}></Route>
            <Route path="/verifyOTP" element={<ConfirmOTP />}></Route>
            <Route path="/resendOTP" element={<ReSendOTP  />}></Route>
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
