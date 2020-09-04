import React from "react";

const About = () => {
  return (
    <div>
        <h2 style={{textAlign: 'center'}}>WHAT IS ON YOUR AGENDA?</h2>
        <img src={require('../tasks_pic.png')} alt="a clipboard, timer and a laptop" width='100' height='500' />
    </div>
    );
};

export default About;