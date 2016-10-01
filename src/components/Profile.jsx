import React from 'react';

class Profile extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Profile page?</h1>
        <div>Name: { this.props.user.username }</div>
        <div></div>
      </div>
    );
  }
}

export default Profile;
