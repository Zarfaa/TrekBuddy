import React, { useState } from 'react'

const HotelDetail = (onNext) => {
  const [formReady, setFormReady] = useState(false);
  const [hotelDetail, setHotelDetail] = useState({
    name: "",
    description: "",
    classType: "",
    roomNumber: 1,
    capacity: 2,
    No_of_beds: "",
    price: 2500,
    date: "",
    available: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotelDetail({ ...hotelDetail, [name]: value });
    const Name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const classType = document.querySelector('#classType').value;
    const roomNumber = document.querySelector('#roomNumber').value;
    const capacity = document.querySelector('#capacity').value;
    const No_of_beds = document.querySelector('#No_of_beds').value;
    const price = document.querySelector('#price').value;
    const date = document.querySelector('#date').value;
    const avaliable = document.querySelector('#avaliable').value;
    if (Name && description && classType && roomNumber && capacity && No_of_beds && price && date && avaliable) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }

  const handleContinue = () => {
    if (formReady) {
      onNext();
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <>
      <div className='card m-5 p-5'>
        <h4>What are your Property Details?</h4>
        <div className=" mb-4 col-6">
          <label htmlFor="name" className="form-label">Property Name</label>
          <input type="text" className="form-control" id="propertyName" name="name" value={hotelDetail.name} onChange={handleInputChange} />
          <span>This name will be seen by guests when they search for a place to stay</span>
        </div>
        <div className="mb-4  col-6">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" value={hotelDetail.description} onChange={handleInputChange} />
        </div>
        <div className="mb-4  col-6">
          <label htmlFor="classType" className="form-label">Class Type</label>
          <select type="text" className="form-control" id="classType" name="classType" value={hotelDetail.classType} onChange={handleInputChange}>
            <option>Economy Class</option>
            <option>Business Class</option>
            <option>First Class</option>
          </select>
        </div>
      </div>
      <div className="card m-5 p-5">
        <h3>Room Details</h3>
        <div className="mb-4 col-6">
          <label htmlFor="roomNumber" className="form-label">Room Number</label>
          <input type="number" className="form-control" id="roomNumber" name="roomNumber" value={hotelDetail.roomNumber} onChange={handleInputChange} />
        </div>
        <div className="mb-4 col-6">
          <label htmlFor="No_of_beds" className="form-label">Number of beds available?</label>
          <input type="number" className="form-control" placeholder='2 single beds' id="No_of_beds" name="No_of_beds" value={hotelDetail.No_of_beds} onChange={handleInputChange} />
        </div>
        <div className="mb-4 col-6">
          <label htmlFor="capacity" className="form-label">How many guests can stay in this room?</label>
          <input type="number" className="form-control" placeholder='number of guest' id="capacity" name="capacity" value={hotelDetail.capacity} onChange={handleInputChange} />
        </div>

        <div className="mb-4 col-6">
          <label htmlFor="price" className="form-label">What is the price per night?</label>
          <input type="number" className="form-control" placeholder='2500' id="price" name="price" value={hotelDetail.price} onChange={handleInputChange} />
        </div>
      </div>
      <div className="card m-5 p-5">
        <h3>Avaliabilty</h3>
        <div className=" mb-4 col-6">
          <label for="date" className="form-label">List the dates</label>
          <input type="number" className="form-control" id="date" name="date" value={hotelDetail.date} onChange={handleInputChange} />
        </div>
        <div className="mb-4 col-6">
          <input type="radio" name="avaliable" value={hotelDetail.avaliable} onChange={handleInputChange} />
          <label for="true"> Room is available</label><br/>
            <input type="radio"  name="avaliable" value={hotelDetail.avaliable} onChange={handleInputChange} />
            <label for="false"> Room is not available </label><br/>
            </div>
            <button type="button" className="mb-4  col-6 btn btn-success" onClick={handleContinue}>Continue</button>
        </div>
      </>
      )
}

      export default HotelDetail