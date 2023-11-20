import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVendorProfile, updateVendorProfile } from '../../Redux/Actions/VendorActions';
import "./style.css"

const EditProfile = () => {
  const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);
  const { loading, data } = useSelector((state) => state.Vendor);

  const [vendorData, setvendorData] = useState({
    userName: '',
    DateOfBirth: '',
    contactNumber: '',
    companyName: ''
  });

  const id = localStorage.getItem('VendorId');
  console.log("VendorId", id);

  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);

  useEffect(() => {
    if (id) {
      dispatch(getVendorProfile(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    setvendorData({
      userName: data.name,
      DateOfBirth: data.DateOfBirth,
      contactNumber: data.phoneNumber,
      companyName: data.hotelName
    });
  }, [data]);


  const handleInputChange = (e) => {
    setvendorData({ ...vendorData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadingStates(true);
    dispatch(updateVendorProfile(id, { ...vendorData }, setLoadingStates));
  };

  return (
    <div className="Profile_Data">
      <form onSubmit={handleSubmit}>
        <h4>Personal information</h4>
        <input
          className="form-control mb-3 field-color"
          name="userName"
          value={vendorData.userName}
          type="text"
          id="userName"
          required
          onChange={handleInputChange}
        />
        <input
          className="form-control mb-3 field-color"
          name="DateOfBirth"
          value={vendorData.DateOfBirth}
          type="text"
          id="DateOfBirth"
          required
          onChange={handleInputChange}
        />
        <input
          className="form-control mb-3 field-color"
          name="contactNumber"
          value={vendorData.contactNumber}
          type="text"
          id="contactNumber"
          required
          onChange={handleInputChange}
        />
        <h4>Property Info</h4>
        <input
          className="form-control mb-3 field-color"
          name="companyName"
          value={vendorData.companyName}
          type="text"
          id="companyName"
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
