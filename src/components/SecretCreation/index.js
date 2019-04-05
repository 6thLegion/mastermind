import React from 'react';
import axios from 'axios';
import Clavija from '../Clavija';
import './index.css';

class Secret extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log('handle click on clavija')
  }
  // axios.get(`http://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     });

  render () {
      return (
        <section className="secret-creation-form">
        <h3>Secret Creation</h3>
        <Clavija color={"gris"} onClick={(e) => { this.handleClick(e)}} />
      </section>
    );
  }
}

export default Secret;
