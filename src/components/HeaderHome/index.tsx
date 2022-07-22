import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface IHeaderHome {
  changeInfoScreenMode: () => void;
}

export const HeaderHome = ({ changeInfoScreenMode }: IHeaderHome) => {
  return (
    <header className="header">
      <div className="header--left-side">Software Developer's knowledge base</div>
      <div className="header--right-side">
        <Link to={'/about'} className="right-side--link-to-about">
          About project
        </Link>
        <button onClick={changeInfoScreenMode} className="right-side--toggleModeBtn">
          Mode
        </button>
      </div>
    </header>
  );
};
