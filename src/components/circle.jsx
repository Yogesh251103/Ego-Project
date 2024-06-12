import React, { useState } from 'react';
import '../App.css'

const Circle = (props) => {
  const [state, setState] = useState(false);

  const toggleHandler = () => {
    setState(!state);
  };

  return (
    <div className='grid-item'>
      <div
        className='circle'
        onClick={toggleHandler}
        style={{ backgroundColor: state ? (props.name === "Ego" ? "red" : "green") : "transparent" }}
      ></div>
      <p>{props.name}</p>
    </div>
  );
};

export default Circle;
