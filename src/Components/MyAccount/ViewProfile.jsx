import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile} from '../../Redux/Actions/UserActions';
import "./style.css"

const EditProfile = () => {
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.User);

  const [userData, setUserData] = useState({
    userName: '',
    DateOfBirth: '',
    contactNumber: '',
    email:''
  });
  
  const id = localStorage.getItem('loginId');

useEffect(() => {
  dispatch(getUserProfile(id))
  setUserData({
    userName: data.name,
    DateOfBirth: data.DateOfBirth,
    contactNumber: data.phoneNumber,
    email:data.email
  });
}, [id, dispatch, data]);


  return (
    <div className="Profile_Data">
      <form >
        <h4>Your account</h4>
         <input
          className="form-control mb-3 field-color"
          name="email"
          value={userData.email}
          type="text"
          id="email"
        />
        <h4>Personal information</h4>
        <input
          className="form-control mb-3 field-color"
          name="userName"
          value={userData.userName}
          type="text"
          id="userName"
        />
        <input
          className="form-control mb-3 field-color"
          name="DateOfBirth"
          value={userData.DateOfBirth}
          type="text"
          id="DateOfBirth"
        />
        <input
          className="form-control mb-3 field-color"
          name="contactNumber"
          value={userData.contactNumber}
          type="text"
          id="contactNumber"
        />
      </form>
    </div>
  );
};

export default EditProfile;
