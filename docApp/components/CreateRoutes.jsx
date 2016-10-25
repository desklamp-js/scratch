import React from 'react';

const CreateRoutes = () => {
  return (
    <div className="component">
      <h1 className="main-heading">CreateRoutes with Desklamp</h1>
      <div className="inlinecode">
        <div className="text">
          Routing in Desklamp is meant to get you up and running with client-side page navigation and url updates, as well as browser history, as soon as possible.
          To create basic navigation, simply nest your components inside the Container component Desklamp provides.For example, if you want to create routes for components Home and CreatePost,
          first define these components as you normally would.Then import them into your index.js file, and then nest them inside the Container component like so:
        </div>
        <img src="./assets/createroute.png" alt="code snippet" className="codeimg" />
        <h2 className="main-heading">Creating Nested routes</h2>
        <div className="text">
          To create a nested route (like /home/homey), simply nest the {"<Homey />"}
          component inside of the {"<Home />"} component within {"<Container/>"}
          and your route will be created accordingly.
        </div>
        <img src="./assets/nested.png" alt="code snippet" className="codeimg" width="800" />
      </div>
    </div>
  );
};

export default CreateRoutes;
