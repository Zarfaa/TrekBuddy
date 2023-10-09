import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar"
import Home from '../Pages/Home/index';
import UserSignup from "../Pages/Signup/UserSignUP"
import VendorSignup from "../Pages/Signup/VendorSignUP"
import Login from "../Pages/Login/Login"
import OTP from '../Pages/Login/OTP';
import Footer from "../Components/Footer/Footer"
import VendorPortal from '../Components/VendorPortal/index';
import MultiStepForm from '../Components/VendorPortal/Form';
import MyAccount from '../Components/MyAccount';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
function App() {
  return (
    <div className="App">
              <BrowserRouter>
              <Provider store={store}>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/UserSignup" element={<UserSignup/>}></Route>
            <Route path="/VendorSignup" element={<VendorSignup/>}></Route>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/OTP" element={<OTP/>}></Route>
            <Route path="/vendorportal" element={<VendorPortal />}></Route>
            <Route path="/listing" element={<MultiStepForm/>}></Route>
          </Routes>
          <Footer/>
          </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
