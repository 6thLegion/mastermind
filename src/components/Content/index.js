import React from 'react';
import ClavijasContainer from '../ClavijasContainer';
import './index.css';

const Content = (props) => {
  return (
    <section className="App-content">
      <h2 className="content-title">{props.contentTitle}</h2>
      <ClavijasContainer type={'Secret'} pattern={['rojo', 'azul', 'rojo', 'amarillo', 'naranja']} />
      <ClavijasContainer type={'Guess'} pattern={['rojo', 'azul', 'rojo', 'rojo', 'rojo']} />
    </section>
  );
}

export default Content;
