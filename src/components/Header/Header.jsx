import React from 'react';
import { Link } from 'react-router-dom';
import S from './Header.module.css';
import Dogs from '../../assets/dogs.svg';

const Header = () => {
  return (
    <header className={S.header}>
      <nav className={`${S.nav} container`}>
        <Link className={S.logo} to="/" aria-label="Dogs - Home">
          <img width={50} height={50} src={Dogs} />
        </Link>
        <Link className={S.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
