import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVendorProfile, createPost } from '../../Redux/Actions/VendorActions';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from "../../Constant/FirebaseConfig";
import "./Form.css";

const storage = getStorage(app);

const ListProperty = () => {
  const dispatch = useDispatch();
  const [loadingStates, setLoadingStates] = useState(false);
  const { data, loading } = useSelector((state) => state.Vendor);
  const [listProperty, setlistProperty] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    name: "",
    description: "",
    classType: "",
    roomNumber: 1,
    capacity: 2,
    No_of_beds: "",
    price: 2500,
    date: "",
    available: true,
    image: []

  });
  useEffect(() => {
    setLoadingStates(loading);
  }, [loading]);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [photoURLs, setPhotoURLs] = useState([]);

  const handleFileUpload = async (event) => {
    const files = event.target.files;
    const newPhotos = Array.from(files).slice(0, 5);

    for (const photo of newPhotos) {
      const storageRef = ref(storage, `room-photos/${photo.name}`);
      await uploadBytes(storageRef, photo);

      const downloadURL = await getDownloadURL(storageRef);
      setPhotoURLs((prevURLs) => [...prevURLs, downloadURL]);
    }
    setUploadedPhotos((prevPhotos) => [...newPhotos, ...prevPhotos]);
  };

  useEffect(() => {
    console.log("Download URLs:", photoURLs);
  }, [photoURLs]);


  const id = localStorage.getItem('VendorId');

  useEffect(() => {
    dispatch(getVendorProfile(id));
  }, [id, dispatch]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setlistProperty({ ...listProperty, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ ...listProperty }, setLoadingStates))
    setlistProperty({
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      name: "",
      description: "",
      classType: "",
      roomNumber: 1,
      capacity: 2,
      No_of_beds: "",
      price: 2500,
      date: "",
      available: true,
      image: photoURLs
    })

  };

  return (
      <form onSubmit={handleSubmit} className='listproperty-bg'>
        <div className=" Top-text">
          <h3>Welcome {data.name}!</h3>
          <span>Tell us about your property</span>
        </div>

        <h3 className='text-margin'>What are your Property Details?</h3>
        <div className='card Margin'>
          <div className=" mb-4 col-12">
            <label htmlFor="name" className="form-label">Property Name</label>
            <input type="text" className="form-control" id="propertyName" name="name" value={listProperty.name} onChange={handleInputChange} />
            <span>This name will be seen by guests when they search for a place to stay</span>
          </div>
          <div className="mb-4  col-12">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={listProperty.description} onChange={handleInputChange} />
          </div>
          <div className="col-12">
            <label htmlFor="classType" className="form-label">Class Type</label>
            <select type="text" className="form-control" id="classType" name="classType" value={listProperty.classType} onChange={handleInputChange}>
              <option>Economy Class</option>
              <option>Business Class</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        <h3 className='text-margin'>Where is your Property Located?</h3>
        <div className="card Margin">
          <div className="mb-4  col-12">
            <label className="form-label">Street Address</label>
            <input type="text" className="form-control" placeholder='e.g. 123 Street ' onChange={handleInputChange} id="street" name="street" value={listProperty.street} />
          </div>
          <div className="row">
            <div className="col-md-6 mb-4">
              <label className="form-label">City Name</label>
              <input type="text" className="form-control" placeholder='e.g. Lahore' onChange={handleInputChange} id="city" name="city" value={listProperty.city} />
            </div>
            <div className="col-md-6 mb-4">
              <label className="form-label">State</label>
              <input type="text" className="form-control" placeholder='e.g. Punjab ' onChange={handleInputChange} id="state" name="state" value={listProperty.state} />
            </div>
          </div>

          <div className="row">
            <div className="mb-4  col-6">
              <label className="form-label">Country</label>
              <input type="text" className="form-control" placeholder='e.g. Pakistan ' onChange={handleInputChange} id="country" name="country" value={listProperty.country} />
            </div>
            <div className="mb-4  col-6">
              <label htmlFor="zipCode" className="form-label">Zip Code</label>
              <input type="number" className="form-control" placeholder='e.g. 5400 ' onChange={handleInputChange} id="zipCode" name="zipCode" value={listProperty.zipCode} />
            </div>
          </div>
        </div>


        <h3 className='text-margin'>Room Details</h3>
        <div className="card Margin">
          <div className="mb-4 col-12">
            <label htmlFor="roomNumber" className="form-label">Room Number</label>
            <input type="number" className="form-control" id="roomNumber" name="roomNumber" value={listProperty.roomNumber} onChange={handleInputChange} />
          </div>
          <div className="mb-4 col-12">
            <label htmlFor="No_of_beds" className="form-label">Number of beds available?</label>
            <input type="number" className="form-control" placeholder='2 single beds' id="No_of_beds" name="No_of_beds" value={listProperty.No_of_beds} onChange={handleInputChange} />
          </div>
          <div className="mb-4 col-12">
            <label htmlFor="capacity" className="form-label">How many guests can stay in this room?</label>
            <input type="number" className="form-control" placeholder='number of guest' id="capacity" name="capacity" value={listProperty.capacity} onChange={handleInputChange} />
          </div>

          <div className="mb-4 col-12">
            <label htmlFor="price" className="form-label">What is the price per night?</label>
            <input type="number" className="form-control" placeholder='2500' id="price" name="price" value={listProperty.price} onChange={handleInputChange} />
          </div>
        </div>
        <h3 className='text-margin'>Avaliabilty</h3>
        <div className="card Margin">
          <div className=" mb-4 col-12">
            <label for="date" className="form-label">List the dates</label>
            <input type="date" className="form-control" id="date" name="date" value={listProperty.date} onChange={handleInputChange} />
          </div>
          <div className="mb-4 col-12">
            <input type="radio" name="avaliable" value={listProperty.avaliable} onChange={handleInputChange} />
            <label for="true"> Room is available</label><br />
            <input type="radio" name="avaliable" value={listProperty.avaliable} onChange={handleInputChange} />
            <label for="false"> Room is not available </label><br />
          </div>
        </div>

        <h3 className='text-margin'>Property Photos</h3>
        <div className=' card Margin'>
          <span className='mb-5'>Upload up to 5 room photos</span>
          <div className='Photos_container'>
            <input type="file" onChange={handleFileUpload} multiple accept="image/*" className='input_button' />
          </div>
          <div>
            {uploadedPhotos.map((photo, index) => (
              <img key={index} src={URL.createObjectURL(photo)} alt={`Room Photo ${index}`} style={{ width: "40%", margin: "4%" }} />
            ))}
          </div>
        </div>

        <div className='col-12'>
          <button className="btn btn-success" type='submit'>
            {loadingStates ? (
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              ""
            )}
            Submit</button>
        </div>

      </form>

  )
}

export default ListProperty