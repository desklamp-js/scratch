import React from 'react';
import { Link } from '../desklamp';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link view={'/not-home'} tag={'not-home'} /></li>
        <li><Link view={'/login'} tag={'login'} /></li>
        <li><Link view={'/posts'} tag={'posts'} /></li>
        <li><Link view={'/signup'} tag={'sign-up'} /></li>
      </ul>
    </nav>
  );
};

export default Nav;
