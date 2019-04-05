import React from 'react';
import axios from 'axios';
import './index.css';

class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pattern: []
    };
    const date = new Date();
  }

  handleClick = (e) => {
    if (this.state.pattern.length < 5) {
      let patternArray = this.state.pattern;
      patternArray.push(e.target.value);
      this.setState({pattern: patternArray});

      console.log('this state', this.state);

      if (this.state.pattern.length == 5){
        this.setState({enableButton: true});
      }
    }
  }

  saveSecret = () => {
    axios.post(`http://localhost:8080/api/patterns/`)
      .then(res => {
        console.log('response', res);
      })
      .catch((err) => {
        console.log('error', err);
      })
  }

  render () {
    return (
      <section className="secret-creation-form">
        <h3>Secret Creation</h3>
        {/* <Clavija color={"gris"} /> */}

        <select className="secret-creation-select" onChange={this.handleChange}>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
          <option value="naranja">Naranja</option>
          <option value="amarillo">Amarillo</option>
          <option value="verde">Verde</option>
        </select>

        <div>
          {this.state.enableButton ? <button onClick={this.saveSecret}>Generar secret</button> : null}
        </div>
      </section>
    );
  }
}

export default Secret;
