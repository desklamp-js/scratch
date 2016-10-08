import React from 'react';
import { Link } from '../desklamp';

const Nav = () => {
  return (
    <div>
      <ul>
        <Link view={'Home'} tag={'home'} />
        <Link view={'CreatePost'} tag={'create-post'} />
        <Link view={'Login'} tag={'login'} />
        <Link view={'Posts'} tag={'posts'} />
        <Link view={'Signup'} tag={'sign-up'} />
      </ul>
    </div>
  );
};

export default Nav;
