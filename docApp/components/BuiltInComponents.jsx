import React from 'react';

const BuiltInComponents = () => {
  return (
    <div className="component">
      <h1 className="main-heading">This the BuiltInComponents page</h1>
      <div className="inlinecode">
        <div className="text">
          Desklamp provides {'<Link/>'} components to link to your routes. These components take a view property referring to the route (without the #) and tag refers to the displayed text of the link.
        </div>
        <img src="./assets/link.png" alt="Nav code" className="codeimg" width="400" style={{ marginBottom: '5%' }} />
        <div className="text">
          If you load data in your state or make other asynchronous calls before changing views, use {'<AsyncLink/>'} rather than {'<Link/>'}. This works well for 'get' requests. This component takes the same view and tag props as the {'<Link />'} component, as well as an additional prop called func. The func prop will be the function to be executed prior to the view rendering.
        </div>
        <img src="./assets/async.png" alt="Nav code" className="codeimg" width="900" />
      </div>
    </div>
  );
};

export default BuiltInComponents;
