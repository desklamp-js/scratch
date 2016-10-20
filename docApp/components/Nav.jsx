import React from 'react';
import { Link } from '../desklamp';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link view={'/home'} tag={'home'} /></li>
        <li><Link view={'/quick-start'} tag={'quick-start'} /></li>
        <li><Link view={'/getting-started'} tag={'getting-started'} /></li>
      </ul>
    </nav>
  );
};

export default Nav;
