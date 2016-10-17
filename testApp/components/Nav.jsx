import React from 'react';
import { Link, AsyncLink } from '../desklamp';

function print() {
  for (let i = 0; i < 10000; ++i) {
    console.log(i);
  }
}


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><AsyncLink view={'/login'} tag={'home'} func={() => print()} /></li>
        <li><Link view={'/login'} tag={'login'} /></li>
        <li><Link view={'/posts'} tag={'posts'} /></li>
        <li><Link view={'/signup'} tag={'sign-up'} /></li>
      </ul>
    </nav>
  );
};

export default Nav;
