import React from "react";
import Navbar from "@/app/component/Navbar";
import Hero from "./component/Hero";
import Categoty from "./component/Categoty";
import Line from "./component/Line";
import Skill from "./component/Skill";
import MyProject from "./component/MyProject";
import LetUs from "./component/LetUs";
import Knowledge from "./component/Knowledge";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Form from "./component/Form";
const page = () => {
  return (
    <div>
    
      <Hero />
      <Skill />
      <MyProject />
      <LetUs />
      <Knowledge />
      <Education />
      <Categoty />
      <Contact />
      <Form/>
    </div>
  );
};

export default page;
