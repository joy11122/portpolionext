import React from "react";

const Footer = () => {
  return (

      <div className="container-fluid  footer-bg text-dark p-5">
        <h2 className="text-center display-6 fw-bold text-info">
          Joyanta Halder
        </h2>
        <p className="text-center text-white">
          Ketla,Kolapatgati,Dighalia-9220,
          <br />
          Khulna,Bangladeah
        </p>
        <div className="d-flex text-danger gap-3 justify-content-center align-items-center ">
          <i className="bi bi-instagram "></i>
          <i className="bi bi-facebook "></i>
          <i className="bi bi-twitter  "></i>
          <i className="bi bi-github"></i>
        </div>
        <p className="text-center mt-5 text-danger">
          Copyright <span className="text-info">©</span> 2024,powered by Joyanta
          halder
        </p>
      </div>

  );
};

export default Footer;
