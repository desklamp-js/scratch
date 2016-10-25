import React from 'react';

const InitState = () => {
  return (
    <div className="component">
      <h1 className="main-heading">Creating State</h1>
      <div className="inlinecode">
        <div className="text">
          Create an object representing your initial state. This object represents all data
          that will be passed down to each route upon render as props.state.
        </div>
        <img src="./assets/initState.png"className="codeimg" alt="code snippet" width="200" />
        <h2 className="main-heading">Creating Custom Functions</h2>
        <div className="text">
          Declare an object to hold your functions.
          Any functions added as methods to this object will be automatically bound and passed down to all views upon render as props.powers.
        </div>
        <img src="./assets/custFuncs.png"className="codeimg" alt="code snippet" width="300" />
      </div>
    </div>
  );
};

export default InitState;
