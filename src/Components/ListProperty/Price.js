import React from 'react'

const Price = () => {
  return (
   <>
      <div className="m-5">
        <h3>Layout and pricing</h3>
      </div>
      <div className="card m-5 p-5">
      <div className="mb-4 col-6">
      <label for="exampleFormControlInput1" class="form-label">What kind of beds are available in this room?</label>
          <select type="text" className="form-control" placeholder='number of guest' >
            <option>Single bed</option>
            <option>Double bed</option>
            <option>Sofa bed</option>
            <option>Matress</option>
            </select>
        </div>
        <div className="mb-4 col-6">
      <label for="exampleFormControlInput1" class="form-label">Number of beds in this room</label>
          <select type="text" className="form-control" placeholder='number of guest' >
            <option>1 single bed</option>
            <option>2 single beds</option>
            <option>1 single bed and Sofa bed</option>
            <option>2 single bed and 1 Matress</option>
            </select>
        </div>
      <div className="mb-4 col-6">
      <label for="exampleFormControlInput1" class="form-label">How many guests can stay in this room?</label>
          <input type="text" className="form-control" placeholder='number of guest' />
        </div>
        <div className="mb-4 col-6">
        <label for="exampleFormControlInput1" class="form-label">What is the price per night?</label>
          <input type="text" className="form-control" placeholder='0' />
        </div>
        <button type="button" className="mb-4  col-6 btn btn-success">Continue</button>
      </div>
   </>
  )
}

export default Price