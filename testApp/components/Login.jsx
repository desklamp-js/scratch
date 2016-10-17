import React from 'react';

const Login = ({ powers }) => {
  // function postThisShit(e) {
  //   e.preventDefault();

  //   const username = document.getElementById('username').value;
  //   const password = document.getElementById('password').value;

  //   powers.login(username, password);
  // }
  return (
    <div className="container">
      <h1>This the Login page</h1>
      <br />
      <form onSubmit={powers.login} >
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

export default Login;
