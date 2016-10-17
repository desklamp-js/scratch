import React from 'react';
import { Desklamp, Container } from 'desklamp';

const Login = ({ powers, state }) => {
  function postIt(e) {
    e.preventDefault();
    const post = 'post3';
    const newPosts = [...state.posts, post];
    Desklamp.updateState({ posts: newPosts });
  }
  return (
    <div className="container">
      <h1>This the Login page</h1>
      <br />
      <form onSubmit={postIt} >
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
