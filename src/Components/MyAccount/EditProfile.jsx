import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../Redux/Actions/UserActions';
import "./style.css"

const EditProfile = () => {
  const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);
  const { loading, data} = useSelector((state) => state.User);

  const [userData, setUserData] = useState({
    userName: '',
    DateOfBirth: '',
    contactNumber: '',
  });
  

  const id = localStorage.getItem('loginId');
  console.log('Retrieved ID from local storage:', id);

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  useEffect(() => {
    if (id) {
      dispatch(getUserProfile(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setUserData({
      userName: data.name,
      DateOfBirth: data.DateOfBirth,
      contactNumber: data.phoneNumber,
      companyName: data.hotelName
    });
  }, [data]);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    setLoadingStates(true);
    dispatch(updateUserProfile(id, { ...userData }, setLoadingStates));
  };
  

  return (
    <div className="Profile_Data">
      <form onSubmit={handleSubmit}>
        <h4>Personal information</h4>
        <input
          className="form-control mb-3 field-color"
          name="userName"
          value={userData.userName}
          type="text"
          id="userName"
          required
          onChange={handleInputChange}
        />
        <input
          className="form-control mb-3 field-color"
          name="DateOfBirth"
          value={userData.DateOfBirth}
          type="text"
          id="DateOfBirth"
          required
          onChange={handleInputChange}
        />
        <input
          className="form-control mb-3 field-color"
          name="contactNumber"
          value={userData.contactNumber}
          type="text"
          id="contactNumber"
          required
          onChange={handleInputChange}
        />

        <button type="submit" className='button'>
          {loadingStates ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            ""
          )}
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
