import React from 'react';
import { Link } from '../desklamp';

const Nav = () => {
  return (
    <nav>
      <div className="nav-text-logo">Desklamp Docs</div>
      <ul id="slide-out" className="side-nav fixed">
        <li><div className="nav-logo"><Link view={'/home'} tag={'Desklamp'} /></div></li>
        <li><div className="divider"></div></li>
        <li><Link view={'/quick-start'} tag={'Quick Start'} /></li>
        <li><Link view={'/getting-started'} tag={'Getting Started'} /></li>
        <li><Link view={'/createroutes'} tag={'Creating Routes'} /></li>
        <li><Link view={'/initapp'} tag={'Initializing Your Application'} /></li>
        <li><Link view={'/builtinfunctions'} tag={'Built in Functions'} /></li>
        <li><Link view={'/builtincomponents'} tag={'Built in Components'} /></li>
        <li><Link view={'/extras'} tag={'Extra Features'} /></li>
      </ul>
    </nav>
  );
};

export default Nav;

// <nav classNameName="nav">
//   <ul>
//     <li><Link view={'/home'} tag={'home'} /></li>
//     <li><Link view={'/quick-start'} tag={'quick-start'} /></li>
//     <li><Link view={'/getting-started'} tag={'getting-started'} /></li>
//   </ul>
// </nav>
