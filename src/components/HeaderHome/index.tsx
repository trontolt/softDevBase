import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export const HeaderHome = () => {
  return (
    <header className="header">
      <div className="header--left-side">Software Developer's knowledge base</div>
      <div className="header--right-side">
        <Link to={'/about'} className="right-side--link-to-about">
          About project
        </Link>
      </div>
    </header>
  );
};
