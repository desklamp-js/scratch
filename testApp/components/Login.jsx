import React from 'react';

const Login = ({ powers }) => {
  function postThisShit(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    powers.login(username, password);
  }
  return (
    <div>
      <h1>This the Login page</h1>
      <br />
      <form onSubmit={postThisShit}>
        <input id="username" type="text" placeholder="username" />
        <input id="password" type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
