import React,{useState} from 'react'
const BasicInfo = ({ onNext }) => {
  const [formReady, setFormReady] = useState(false);

  const handleContinue = () => {
    if (formReady) {
      onNext();
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleInputChange = () => {
    const propertyName = document.querySelector('#propertyName').value;
    const contactName = document.querySelector('#contactName').value;
    const contactNumber = document.querySelector('#contactNumber').value;
    const streetAddress = document.querySelector('#streetAddress').value;

    if (propertyName && contactName && contactNumber && streetAddress) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  };
  return (
    <>
      <div className="m-5">
        <h3>Welcome Vendor Name!</h3>
        <span>Start by telling us your property's name, contact details and address.</span>
      </div>
      <div className="card m-5 p-5">
        <div className="mb-4 col-6">
          <label className="form-label">Property Name</label>
          <input type="text" className="form-control" onChange={handleInputChange} id="propertyName"/>
          <span>This name will be seen by guests when they search for a place to stay</span>
        </div>
        <div className="mb-4  col-6">
          <label className="form-label">Contact name</label>
          <input type="text" className="form-control" id="contactName" />
        </div>
        <div className="mb-4  col-6">
          <label className="form-label">Contact number</label>
          <input type="tel" className="form-control" onChange={handleInputChange} id="contactNumber" />
          <span>This will help us assist you with your registration when needed</span>
        </div>
        <h4>Where is your Property Located?</h4>
        <div className="mb-4  col-6">
          <label className="form-label">Street Address</label>
          <input type="tel" className="form-control" placeholder='e.g. 123 Street ' onChange={handleInputChange} id="streetAddress" />
        </div>
        <div className="mb-4  col-6">
          <label className="form-label">Address Line 2</label>
          <input type="tel" className="form-control" placeholder='Unit Number , Floor , Suit , Building ... ' onChange={handleInputChange} />
        </div>
        <div className="mb-4  col-6">
        <label className="form-label" for="country">Region:</label>
        <select className="form-label" id="country" name="country" onChange={handleInputChange}>
          <option value="KPK">KPK </option>
          <option value="Hunza">Hunza </option>
          <option value="Muree">Muree</option>
          <option value="Sawat">Sawat</option>
        </select>
        </div>
        <button type="button" className="mb-4  col-6 btn btn-success" onClick={handleContinue}>Continue</button>
      </div>
    </>
  )
}

export default BasicInfo