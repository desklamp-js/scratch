import React from 'react';
import { Link } from 'desklamp';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <Link view={'/new-user-page'} tag={'new user?'} />
        <Link view={'/posts'} tag={'posts'} />
      </ul>
    </nav>
  );
};

export default Nav;
