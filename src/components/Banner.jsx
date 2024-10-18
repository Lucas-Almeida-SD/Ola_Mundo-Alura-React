import React from 'react';

import '../styles/Banner.scss';

import coloredCircle from '../assets/circulo_colorido.png';
import myPicture from '../assets/minha_foto.jpeg';

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="introduction-container">
        <h2 className="title">Olá, mundo!</h2>
        <p className="text">
          Boas vindas ao meu espaço pessoal!
          {' '}
          Eu sou Lucas Almeida, estudante eterno de Desenvolvimento Web.
          {' '}
          Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>
      <div className="images-container">
        <img className="colored-circle" src={coloredCircle} alt="Imagem de círculo colorido" />
        <img className="my-picture" src={myPicture} alt="Imagem de Lucas Almeida" />
      </div>
    </section>
  );
}
