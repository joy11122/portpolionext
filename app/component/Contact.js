import React from "react";

const Contact = () => {
  return (
  
      <div className="container-fluid  contactt  ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d110017.67608439233!2d71.84191602490947!3d30.491268121951524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1721245825234!5m2!1sen!2sbd"  style={{border:0,width:"100%",height:450}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h3 className="text-center mt-5">Contact Me</h3>
        <div className="row p-5 gy-4 d-flex justify-content-center align-items-center ">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              className="w-100 form-control"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              className="w-100 form-control"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              className="w-100 form-control"
              type="text"
              placeholder="subject... "
            />
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <input
              className="w-100 form-control"
              type="text"
              placeholder="Email..."
            />
          </div>
          <div className="col-md-12">
            <textarea
              className="w-100 form-control "
              placeholder="Write your Messege Here..."
            ></textarea>
          </div>
          <div className=" d-flex text-center justify-content-center align-items-center ">
            <button className="btn btn-primary ">
              <a href="/" className="text-light">
                Send Messege
              </a>
            </button>
          </div>
        </div>
      </div>
  
  );
};

export default Contact;
