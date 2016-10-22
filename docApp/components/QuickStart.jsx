import React from 'react';

const QuickStart = () => {
  return (
    <div className="component" style={{ paddingTop: '0' }}>
      <div className="row">
        <div className="words col s6">
          <h1>Quick Start</h1>
          <div className="browser browserStyle">
            <div className="inner-browser">
              <div className="url">
                <img className="left-arrow arrow" src="./assets/realLeft.svg" alt="desklamp-logo" />
                <img className="arrow" src="./assets/leftArrow.svg" alt="desklamp-logo" />
                <div className="url-bar"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="code col s6">
          <img src="./assets/qs.png" alt="quickstart-code" />
        </div>
      </div>
    </div>
  );
};

export default QuickStart;
