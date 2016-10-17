import React from 'react';

const Login = ({ powers }) => {
  function postThisShit(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    powers.login(username, password);
  }
  return (
    <div className="container">
      <h1>This the Login page</h1>
      <br />
      <form onSubmit={postThisShit} >
        <input id="username" type="text" placeholder="username" />
        <label htmlFor="username" className="control-label">Username</label>

        <input id="password" type="password" placeholder="desklamp" />
        <label htmlFor="password" className="control-label" >Password</label>

        <button type="submit" className="button"><span>Submit</span></button>
      </form>
    </div>
  );
};

export default Login;
