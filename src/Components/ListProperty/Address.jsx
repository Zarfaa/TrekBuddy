import React, { useState } from 'react'
const BasicInfo = ({ onNext }) => {
  const [formReady, setFormReady] = useState(false);
  const [basicInfo, setBasicInfo] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: ""
  });

  const handleContinue = () => {
    if (formReady) {
      onNext();
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
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
        <span>Start by telling us your property's location.</span>
      </div>
      <div className="card m-5 p-5">
        <h4>Where is your Property Located?</h4>
        <div className="mb-4  col-12">
          <label className="form-label">Street Address</label>
          <input type="tel" className="form-control" placeholder='e.g. 123 Street ' onChange={handleInputChange} id="streetAddress" value={basicInfo.street} />
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label">City Name</label>
            <input type="tel" className="form-control" placeholder='e.g. Lahore' onChange={handleInputChange} id="Lahore" value={basicInfo.city} />
          </div>
          <div className="col-md-6 mb-4">
            <label className="form-label">State</label>
            <input type="tel" className="form-control" placeholder='e.g. Punjab ' onChange={handleInputChange} id="punjab" value={basicInfo.state} />
          </div>
        </div>

        <div className="row">
        <div className="mb-4  col-6">
          <label className="form-label">Country</label>
          <input type="tel" className="form-control" placeholder='e.g. Pakistan ' onChange={handleInputChange} id="country" value={basicInfo.country} />
        </div>
        <div className="mb-4  col-6">
          <label className="form-label">Zip Code</label>
          <input type="tel" className="form-control" placeholder='e.g. 5400 ' onChange={handleInputChange} id="zipCode" value={basicInfo.zipCode} />
        </div>
        </div>
        {/*<div className="mb-4  col-6">
          <label className="form-label" for="country">Region:</label>
          <select className="form-label" id="country" name="country" onChange={handleInputChange}>
            <option value="Punjab">Islamabad</option>
            <option value="Punjab">Rawalpindi</option>
            <option value="Punjab">Lahore</option>
            <option value="Punjab">Faisalabad</option>
            <option value="Punjab">Sialkot</option>
            <option value="Punjab">Gujranwala</option>
            <option value="Punjab">Gujrat</option>
            <option value="Punjab">Jhelum</option>
            <option value="Punjab">Sargodha</option>
            <option value="Khyber Pakhtunkhwa">Abbottabad</option>
            <option value="Khyber Pakhtunkhwa">Peshawar</option>
            <option value="Khyber Pakhtunkhwa">Mardan</option>
            <option value="Khyber Pakhtunkhwa">Nowshera</option>
            <option value="Khyber Pakhtunkhwa">Swat</option>
            <option value="Khyber Pakhtunkhwa">Mingora</option>
            <option value="Khyber Pakhtunkhwa">Malakand</option>
            <option value="Gilgit-Baltistan">Gilgit</option>
            <option value="Gilgit-Baltistan">Skardu</option>
            <option value="Gilgit-Baltistan">Hunza</option>
            <option value="Khyber Pakhtunkhwa">Chitral</option>
          </select>
</div>*/}
        <button type="button" className=" mb-4  col-6 btn btn-success" onClick={handleContinue}>Continue</button>
      </div>
    </>
  )
}

export default BasicInfo