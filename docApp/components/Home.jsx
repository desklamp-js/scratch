import React from 'react';

const Home = () => {
  return (
    <div className="component" style={{ paddingTop: '0px' }}>
      <div className="row home-header">
        <div className="words">
          <h1 className="main-heading home-heading">Learn how to use Desklamp!</h1>
          <h4>provides a state container and easy routing.</h4>
        </div>
      </div>
      <div className="links">
        <div className="links-link" style={{ width: '300' }} >
          <img src="./assets/github1.png" alt="GitHub Cat" />
          <a href="https://github.com/desklamp-js/desklamp">Desklamp on github</a>
        </div>
        <div className="links-link" style={{ width: '300', marginTop: '5px' }} >
          <img src="./assets/npm.png" alt="npm bear" style={{ width: '100px', height: '100px' }} />
          <a href="https://www.npmjs.com/package/desklamp">Desklamp npm</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
