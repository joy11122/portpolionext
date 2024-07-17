import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container  contactt p-5 ">
        <h3 className="text-center mt-5">Contact Me</h3>
        <div className="row p-5 gy-4 d-flex justify-content-center align-items-center ">
            <div className="col-md-6 col-sm-6 col-lg-6">
                <input className="w-100 form-control"type="text" placeholder="First Name"/>
            </div>
             <div className="col-md-6 col-sm-6 col-lg-6">
                <input className="w-100 form-control"type="text" placeholder="Last Name"/>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6">
                <input className="w-100 form-control"type="text" placeholder="subject... "/>
            </div>
             <div className="col-md-6 col-sm-6 col-lg-6">
                <input className="w-100 form-control"type="text" placeholder="Email..."/>
            </div>
            <div className="col-md-12">
                <textarea className="w-100 form-control " placeholder="Write your Messege Here..."></textarea>
            </div>
           <div className=" d-flex text-center justify-content-center align-items-center ">
                <button className="btn btn-primary "><a href="/" className="text-light">Send Messege</a></button>
           </div>
        </div>
    </div> 
        </div>
    )
}

export default Contact
