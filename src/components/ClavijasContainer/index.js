import React from 'react';
import axios from 'axios';
import Clavija from '../Clavija';
import './index.css';

const ClavijasContainer = (props) => {
  // axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     });

  return (
    <section className={`clavijas-container ${props.type}`}>
      <h3>{props.type}</h3>
      {props.pattern.map((value) => {
        return (
          <Clavija color={value} />
        )
      })}
    </section>
  );
}

export default ClavijasContainer;
