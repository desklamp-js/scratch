import React from 'react';
import { Link } from 'desklamp';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link view={'/new-user-page'} tag={'new user?'} />
        <Link view={'/posts'} tag={'posts'} />
      </ul>
    </div>
  );
};

export default Nav;
