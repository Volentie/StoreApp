import React from 'react';
import './Contato.css';
import rua from './rua.jpg';

const Contato = () => {
  return (
    <section className="CSection">
      <div className="Container">
        <img className="Cimg" alt="Rua" src={rua} />
        <h3 className="Cdiv">Entre em contato:</h3>
        <p className="Cdiv">
          {' '}
          <span className="bar">─</span>Volentie@gmail.com
        </p>
        <p className="Cdiv">
          {' '}
          <span className="bar">─</span>(99)99999-9999
        </p>
        <p className="Cdiv">
          {' '}
          <span className="bar">─</span>Rua ali do lado
        </p>
      </div>
    </section>
  );
};

export default Contato;
