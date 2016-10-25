import React from 'react';

const CustomNav = () => {
  return (
    <div className="component">
      <h1 className="main-heading">Creating Custom Navigation</h1>
      <div className="inlinecode">
        <div className="text">
          Create a Navigation React component using our custom {"<Link/>"} component or simple anchor tags.
          You can mix and match these two approaches, if you wish to link to an external site or a server route on your navigation,
          simply use a standard anchor tag.
        </div>
        <img src="./assets/nav.png" alt="Nav code" className="codeimg" width="800" />
      </div>
    </div>
  );
};

export default CustomNav;
