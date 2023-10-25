import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../Redux/Actions/UserActions"


const AccountInfo = () => {
  const dispatch = useDispatch();
    const {data} = useSelector((state) => (state.User))

    useEffect(() => {
      dispatch(getUserProfile ());
      console.log(data)
    }, []);

  return (
    <div className='Profile_Data'>
      <form >
            <h4>Your account</h4>
              <input
                className="form-control mb-3"
                placeholder="Email"
                disabled
              />
              <h4>Personal information</h4>
              <input
                className="form-control mb-3"
                placeholder="UserName"
                disabled
              />
              <input
                className="form-control mb-3"
                placeholder="Birthday"
                disabled
              />
              <input
                className="form-control mb-3"
                placeholder="Role"
                disabled
              />
      </form>
  </div>
    
  )
}

export default AccountInfo