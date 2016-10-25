import React from 'react';

const QuickStart = ({ state, powers }) => {
  return (
    <div className="component" style={{ paddingTop: '0' }}>
      <div className="row">
        <div className="words col s6">
          <h1>Quick Start</h1>
          <div className="browser browserStyle">
            <div className="inner-browser">
              <div className="url">
                <img className="left-arrow arrow" src="./assets/realLeft.svg" alt="desklamp-logo" onClick={powers.arrowClick} />
                <img className="arrow" src="./assets/leftArrow.svg" alt="desklamp-logo" onClick={powers.arrowClick} />
                <input className="url-bar" value={state.quickStart.route.toLowerCase()} onKeyDown={powers.input}></input>
              </div>
              <div>
                <ul>
                  <li><a className="anchor" onClick={powers.anchorCLick}>Home</a></li>
                  <li><a className="anchor" onClick={powers.anchorCLick}>CreatePost</a></li>
                  <hr style={{ width: '400px' }} />
                  <li><p><strong>{state.quickStart.route.replace('/', '')}</strong></p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="code col s6">
          <img src="./assets/qs.png" alt="quickstart-code" />
        </div>
      </div>
      <a name="hello" />
    </div>
  );
};

export default QuickStart;
