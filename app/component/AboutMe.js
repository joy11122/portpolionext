import React from "react";

const AboutMe = () => {
  return (
   
      <div className="container-fluid  bg-dark text-light p-5 mb-1">
        <div className="row">
          <div className="col-12">
            <div className="aboutcontent justify-content-center d-flex mx-auto">
              <h2 className="text-center mt-3 mb-3 fw-bold display-3 text-danger wavyorange">
                About Me
              </h2>
              <img
                className="aboutimg mx-auto"
                src="@/app/public/images/card1.jpg"
                alt=""
              />
              <h4 className="text-center mt-3 mb-3 display-3">
                Frontend Developer
              </h4>
              <p className="text-center">
                koren held the good and get out any held the home ministry the
                held help create you help you the help you the home held{" "}
              </p>
              <button className="btn btn-danger mt-3 mb-5 mx-auto d-flex">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default AboutMe;
