import React from 'react';
import ClavijasContainer from '../ClavijasContainer';
import SecretCreation from '../SecretCreation';
import './index.css';

const Content = (props) => {
  return (
    <section className="App-content">
      <h2 className="content-title">{props.contentTitle}</h2>
      <ClavijasContainer type={'Result'} pattern={['negro', 'negro', 'blanco']} />
      <ClavijasContainer type={'Guess'} pattern={['verde', 'azul', 'naranja', 'rojo', 'azul']} />
      <SecretCreation />
    </section>
  );
}

export default Content;
