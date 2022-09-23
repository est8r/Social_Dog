import React from 'react';
import { Link } from 'react-router-dom';
import Dogs from '../../assets/dogs.svg';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" aria-label="Dogs - Home">
          <img width={50} height={50} src={Dogs} />
        </Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
