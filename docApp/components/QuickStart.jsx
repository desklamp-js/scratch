import React from 'react';

const browserStyle = {
  background: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.247059) 0px 4px 10px',
  border: '1px solid rgb(204, 204, 204)',
  flex: '1 1 0%',
  flexDirection: 'column',
  display: 'flex',
};

const QuickStart = () => {
  return (
    <div className="component">
      <div className="row">
        <div className="words col s6">
          <h1>Quick Start</h1>
          <div className="browser" style={browserStyle}>
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
