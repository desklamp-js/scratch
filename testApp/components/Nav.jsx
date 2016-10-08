import React from 'react';
import { SyncLink, Link } from './../Desklamp';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link view={'/not-home'} tag={'not-home'} />
        <Link view={'/createpost'} tag={'create-post'} />
        <Link view={'/login'} tag={'login'} />
        <Link view={'/posts'} tag={'posts'} />
        <Link view={'/signup'} tag={'sign-up'} />
      </ul>
    </div>
  );
};

export default Nav;
