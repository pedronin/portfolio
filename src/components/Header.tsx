import React from 'react';

import githubIcon from '../assets/img/socialIcon/github_icon.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__githab">
          <img src={githubIcon} />
        </div>
      </Link>
    </header>
  );
};

export default Header;
