import React from 'react'

const Form = () => {
    return (
        <div>
     <div className="container">
        <div className="row justify-content-center">
        <div className="card w-75">
  <div className="card-body ">
    <h5 className="card-title text-center mb-4">Login form</h5>
    <form className="row g-3">
      <div className="col-md-12">
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
          <label htmlFor="floatingName">Your Name</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingEmail" placeholder="Your Email" />
          <label htmlFor="floatingEmail">Your Email</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-floating">
          <textarea className="form-control" placeholder="Address" id="floatingTextarea" style={{height: 100}} defaultValue={""} />
          <label htmlFor="floatingTextarea">Address</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="col-md-12">
          <div className="form-floating">
            <input type="text" className="form-control" id="floatingCity" placeholder="City" />
            <label htmlFor="floatingCity">City</label>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-floating mb-3">
          <select className="form-select" id="floatingSelect" aria-label="State">
            <option selected>New York</option>
            <option value={1}>Oregon</option>
            <option value={2}>DC</option>
          </select>
          <label htmlFor="floatingSelect">State</label>
        </div>
      </div>
      <div className="col-md-2">
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingZip" placeholder="Zip" />
          <label htmlFor="floatingZip">Zip</label>
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
      </div>
    </form>
  </div>
</div>
        </div>
     </div>

        </div>
    )
}

export default Form
