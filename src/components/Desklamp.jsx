import React from 'react';
import Login from './Login';
import Profile from './Profile';

class Desklamp extends React.Component{
  constructor(){
    super();
    this.state = {
      view: Login,
      current_uri: '/',
      appState: {
        random: 'hi',
        boo: 'boo',
      },
      views: {
        Login: Login,
        Profile: Profile,
      },
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(view){
    const appState = Object.assign({}, this.state.appState, {random: 'reallybye'})
    this.setState({ view: this.state.views[view.target.innerHTML] , appState: appState});
    console.log(this.state.appState);

  }

  render(){
    return ( 
      <div>
        <button onClick={this.changeView}>Login</button>
        <button onClick={this.changeView}>Profile</button>
        {<this.state.view />}
      </div>
    )
    
  }

}

export default Desklamp;