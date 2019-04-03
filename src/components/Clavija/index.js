import React from 'react';
import './index.css';

const Clavija = (props) => {
  return (
      <div className={`clavija ${props.color}`} />
  );
}

export default Clavija;