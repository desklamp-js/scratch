import React from 'react';

const Home = () => {
  return (
    <div className="component">
      <div className="logo"><img src="./assets/lamp.png" alt="desklamp-logo" /></div>
      <h1 className="main-heading">Welcome!</h1>
      <h1 className="main-heading">Learn how to use Desklamp!</h1>
      <div className="inlinecode" style={{ alignItems: 'center' }}>
        <span style={{ width: '300' }} >
          <img src="./assets/github1.png" alt="npm bear" style={{ width: '100px', display: 'inline' }} />
          <a href="https://github.com/desklamp-js/desklamp" style={{ margin: '1%', display: 'inline' }}>Desklamp on github</a>
        </span>
        <span style={{ width: '300' }} >
          <img src="./assets/npm.png" alt="npm bear" style={{ width: '100px', display: 'inline' }} />
          <a href="https://www.npmjs.com/package/desklamp" style={{ margin: '1%', display: 'inline' }}>Desklamp npm</a>
        </span>
      </div>
    </div>
  );
};

export default Home;
