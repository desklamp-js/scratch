import React from 'react';

const Appinit = () => {
  return (
    <div className="component">
      <h1 className="main-heading">Initializing your App with Desklamp.on()</h1>
      <div className="inlinecode">
        <div className="text">
          Desklamp.on is the main function you will use to tell Desklamp about your application. This method takes three arguments: the initial state and functions objects we created above, and your Nav component. This will declare your initial state, bind your customized functions to the state and display your custom Navbar across all views.

          The custom functions declared to Desklamp.on will be passed down to your routes as props.powers. You can then pass them as props down to child components as selectively as you would like. The initial state will become your props.state, also available to all the routes you have set up in your Container.

          Desklamp.on() will look like this:.
        </div>
        <img src="./assets/on.png" alt="Nav code" className="codeimg" width="300" style={{ marginBottom: '5%' }} />
        <div className="text">
          Example of a component, CreatePost, using its default passed in props and powers:
        </div>
        <img src="./assets/onExample.png" alt="Nav code" className="codeimg" width="700" />
      </div>
    </div>
  );
};

export default Appinit;
