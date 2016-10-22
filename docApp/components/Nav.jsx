import React from 'react';
import { Link } from '../desklamp';

const Nav = () => {
  return (
    <nav>
      <div className="nav-text-logo">Desklamp Docs</div>
      <ul className="side-nav fixed browserStyle">
        <li><div className="nav-logo"><Link view={'/home'} tag={'Desklamp'} /></div></li>
        <li><div className="divider"><hr /></div></li>
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
