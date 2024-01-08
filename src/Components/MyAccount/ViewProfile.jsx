import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../Redux/Actions/UserActions';
import "./style.css"

const EditProfile = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.User);

  const [userData, setUserData] = useState({
    userName: '',
    DateOfBirth: '',
    contactNumber: '',
    email: ''
  });

  const id = localStorage.getItem('loginId');

  useEffect(() => {
    dispatch(getUserProfile(id))
  }, []);

  useEffect(() => {
    setUserData({
      userName: data.name,
      DateOfBirth: data.DateOfBirth,
      contactNumber: data.phoneNumber,
      email: data.email
    });
  }, [data]);


  return (
    <div className="Profile_Data">
      <form className='form-color'>
        <h4>Your account</h4>
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="email">Email:</label>
          </div>
          <div className='col-4'>
            <input
              className="form-control mb-3 field-color"
              name="email"
              value={userData.email}
              type="text"
              id="email"
            />
          </div>
        </div>
        <h4 className='mt-3'>Personal information</h4>
        <div className='row'>
          <div className='col-3'>
            <label htmlFor="userName">UserName:</label>
          </div>
          <div className='col-4'>
            <input
              className="form-control mb-3 field-color"
              name="userName"
              value={userData.userName}
              type="text"
              id="userName"
            />
          </div>
        </div>

        <div className='row'>
          <div className='col-3'>
            <label htmlFor="DateOfBirth">Date of Birth:</label>
            </div>
              <div className='col-4'>
                <input
                  className="form-control mb-3 field-color"
                  name="DateOfBirth"
                  value={userData.DateOfBirth}
                  type="text"
                  id="DateOfBirth"
                />
              </div>
            </div>

            <div className='row'>
              <div className='col-3'>
                <label htmlFor="contactNumber">Contact Number:</label>
              </div>
              <div className='col-4'>
                <input
                  className="form-control mb-3 field-color"
                  name="contactNumber"
                  value={userData.contactNumber}
                  type="text"
                  id="contactNumber"
                />
              </div>
            </div>
          </form>
        </div>
        );
};

        export default EditProfile;
