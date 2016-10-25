import React from 'react';

const BuiltInFunctions = () => {
  return (
    <div className="component">
      <h1 className="main-heading">This the BuiltInFunctions page</h1>
      <div className="inlinecode">
        <h2 className="main-heading">Desklamp.onLoad()</h2>
        <div className="text">
          Desklamp.onLoad() takes any number of functions and runs them in the componentWillMount section of the Container component. This allows you, the developer to run functions on the initial loading of the application at the highest level.
        </div>
        <h2 className="main-heading">Desklamp.updateState()</h2>
        <div className="text">
          Desklamp.updateState() is a function that allows you to update the state of your application from within your custom functions. Desklamp.updateState() takes in an object of the values you would like to change in your state. By default Desklamp.updateState maintains immutability and creates an new object with all of the changes before calling the default React.js setState function.
        </div>
        <img src="./assets/update.png" alt="Nav code" className="codeimg" width="800" />
        <h2 className="main-heading">Desklamp.getState()</h2>
        <div className="text">
          Desklamp.getState() is a simple function that can be called anywhere in your application to get the current state. It can be very useful for debugging and logging what your state looks like if you are experiencing issues with your state data not looking how you think it should. The function call returns the current state object and is the best way to get the state when making updates with wpdateState.
        </div>
      </div>
    </div>
  );
};

export default BuiltInFunctions;
