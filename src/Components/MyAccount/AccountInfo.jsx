import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../Redux/Actions/UserActions';

const AccountInfo = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.User);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    dispatch(getUserProfile(id));
    console.log('email',data.email)
  }, []);

  return (
    <div className="Profile_Data">
    <form>
      <h4>Your account</h4>
      <input
        className="form-control mb-3"
        placeholder={data && data.email}
        disabled
      />
      <h4>Personal information</h4>
      <input
        className="form-control mb-3"
        placeholder={data && data.name}
        disabled
      />
      <input
        className="form-control mb-3"
        placeholder={data && data.DateOfBirth}
        disabled
      />
      <input
        className="form-control mb-3"
        placeholder={data && data.phoneNumber}
        disabled
      />
    </form>
  </div>
  );
};

export default AccountInfo;
