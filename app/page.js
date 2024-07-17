import React from "react";

import Hero from "./component/Hero";


import Skill from "./component/Skill";
import MyProject from "./component/MyProject";
import LetUs from "./component/LetUs";
import Knowledge from "./component/Knowledge";
import Contact from "./component/Contact";
import Education from "./component/Education";
import Form from "./component/Form";
const Page = () => {
  return (
    <div>
    
      <Hero />
      <Skill />
      <MyProject />
      <LetUs />
      <Knowledge />
      <Education />
  
      <Contact />
      <Form/>
    </div>
  );
};

export default Page;
