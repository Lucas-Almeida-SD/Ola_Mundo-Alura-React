import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../utils/routes';

import '../styles/Header.scss';

export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <NavLink className="navlink" to={routes.home}>Inicio</NavLink>
        <NavLink className="navlink" to={routes.aboutMe}>Sobre mim</NavLink>
      </nav>
    </header>
  );
}
