import React from 'react';
import { Link, AsyncLink } from '../desklamp';

// function print() {
//   for (let i = 0; i < 10000; ++i) {
//     console.log(i);
//   }
// }


const Nav = ({ powers }) => {
  return (
    <nav className="nav">
      <ul>
        <li><AsyncLink view={'/posts'} tag={'posts'} func={powers.getPosts} /></li>
        <li><Link view={'/login'} tag={'login'} /></li>
        <li><Link view={'/signup'} tag={'sign-up'} /></li>
      </ul>
    </nav>
  );
};

export default Nav;
