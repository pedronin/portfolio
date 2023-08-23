import React from 'react';

import homeIcon from '../assets/img/home.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__home">
          <img src={homeIcon} />
        </div>
      </Link>
    </header>
  );
};

export default Header;
