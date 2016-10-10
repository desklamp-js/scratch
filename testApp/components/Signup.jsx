import React from 'react';

const Signup = ({ powers }) => {
  function postThisShit(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    powers.signup(username, password);
  }
  console.log('powers', powers)
  return (
    <div className="container">
      <h1>This the Signup page</h1>
      <br />
      <form onSubmit={postThisShit} >
        <div className="form-group">

          <input id="username" type="text" placeholder="lamp"/>
          <label htmlFor="username" className="control-label">Username</label>
          <i className="bar"></i>
        </div>
        <div className="form-group">
          <input id="password" type="password" placeholder="desklamp"/>
          <label htmlFor="password" className="control-label" >Password</label>
          <i className="bar"></i>
        </div>
        <div className="button-container">
          <button type="submit" className="button"><span>Submit</span></button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
