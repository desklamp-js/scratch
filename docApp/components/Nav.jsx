import React from 'react';
import { Link } from 'desklamp';

const Nav = ({ powers }) => {
  return (
    <nav>
      <div className="nav-text-logo">Desklamp Docs</div>
      <ul className="side-nav fixed browserStyle">
        <img src="./assets/lamp.png" alt="logo" height="100px" width="120px"/>
        <li><div className="nav-logo"><Link view={'/home'} tag={'Desklamp'} /></div></li>
        <li><div className="divider"><hr /></div></li>
        <li><Link view={'/quick-start'} tag={'Quick Start'} /></li>
        <li><Link view={'/createroutes'} tag={'Creating Routes'} /></li>
        <li><p className="navText">Initializing Your Application</p></li>
        <ul>
          <li className="small"><Link view={'/initstate'} tag={'Initial State & Custom Functions'} /></li>
          <li className="small"><Link view={'/customnav'} tag={'Creating Custom Navigation'} /></li>
          <li className="small"><Link view={'/appinit'} tag={'Intializing App with Desklamp.on'} /></li>
        </ul>
        <li><Link view={'/builtinfunctions'} tag={'Built in Functions'} /></li>
        <li><Link view={'/builtincomponents'} tag={'Built in Components'} /></li>
        <li><Link view={'/extras'} tag={'Upcoming Features'} /></li>
      </ul>
    </nav>
  );
};

export default Nav;
