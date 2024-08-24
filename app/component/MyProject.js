import React from "react";
import Link from 'next/link';

const MyProject = () => {
  return (
    <>
      <div className="container fullvh mb-5" data-aos="flip-down">
        <h2 className="text-center mb-3">My project</h2>
        <div className="row d-flex justify-content-center align-items-center gy-3 ">
          <div className="col-md-4 col-lg-3" data-aos="slide-left">
            <Link href="https://joy-nu.vercel.app/">
              <a>
                <img
                  className="w-100"
                  style={{ height: 350 }}
                  src="images/card1.jpg"
                  alt="hg"
                />
              </a>
            </Link>
          </div>

          <div className="col-md-8" data-aos="slide-right">
            <img
              className="w-100"
              style={{ height: 350 }}
              src="images/card1.jpg"
              alt="grt"
            />
          </div>

          <div className="col-md-8" data-aos="slide-left">
            <img
              className="w-100"
              style={{ height: 350 }}
              src="images/card1.jpg"
              alt="/rtr"
            />
          </div>

          <div className="col-md-4 col-lg-3" data-aos="slide-right">
            <img
              className="w-100"
              style={{ height: 350 }}
              src="images/card2.jpg"
              alt="rtg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;
