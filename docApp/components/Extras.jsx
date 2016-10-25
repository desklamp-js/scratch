import React from 'react';

const Extras = () => {
  return (
    <div className="component">
      <h1 className="main-heading">Upcoming Features</h1>
      <div className="inlinecode">
        <h2 className="main-heading">History rollBack</h2>
        <div className="text">
            Desklamp automatically keeps track of a history of application state. Currently developing useful rollback of state and exposure of history object to the developer.
        </div>
        <h2 className="main-heading">Debugging</h2>
        <div className="text">
            We are continually adding and improving error handling messages to help with debugging. Please submit any suggestions or requests to help us improve our error messages.
        </div>
        <h2 className="main-heading">Misc</h2>
        <div className="text">
            A floor lamp is a desk lamp if you put it on your desk.
        </div>
      </div>
    </div>
  );
};

export default Extras;
