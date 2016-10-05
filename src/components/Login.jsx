import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submitting = this.submitting.bind(this);
  }
  submitting(e) {
    e.preventDefault();
    let username = {username: ReactDOM.findDOMNode(this.refs.username).value }
    //console.log(ReactDOM.findDOMNode(this.refs.username).value, ReactDOM.findDOMNode(this.refs.password).value);
    this.props.changeView('Profile', username);

  }

  render() {
    console.log(this.props.changeView, 'props');
    return (
      <div>
        <h1>Login Page</h1>
        <br />
        <br />
        <form onSubmit={this.submitting}>
          <div>Username</div>
          <input type="text" ref="username"/>
          <div>Password</div>
          <input type="text" ref="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
