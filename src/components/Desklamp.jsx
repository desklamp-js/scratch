import React from 'react';
import Login from './Login';
import Profile from './Profile';
import Messages from './Messages';
import $ from 'jquery';

const funcs = {log: 0};

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
        Messages: Messages,
      },
    };
    this.changeView = this.changeView.bind(this);
    this.routeLink = this.routeLink.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.log = this.log.bind(this);
    this.log2 = this.log2.bind(this);
    funcs.log = this.log;
    funcs.log2 = this.log2;
  }

log(){
  console.log('hello');
}

log2(){
  console.log('goodbye');
}
 

  componentWillMount(){
      window.onhashchange = function(e){
        let pathstring = location.hash;
        this.routeLink({target: {innerHTML: pathstring.replace("#/", "")}});
        console.log('hit listener');
        }.bind(this);
    }
  
  changeView(view, newState){
    // update appState only by copying
    const appState = Object.assign({}, this.state.appState, newState);
    //update appState on this.state
    this.setState({ view: this.state.views[view], appState: appState});
    console.log(view);
    window.location.hash = ("#/" + view);
  }

  routeLink(view){
    window.location.hash = ("#/" + view.target.innerHTML);
    this.setState({ view: this.state.views[view.target.innerHTML] });
  }

  getMessages() {
    let that = this;
    $.get("http://slack-server.elasticbeanstalk.com/messages", function(data){
      const messages = { messages: data };
      that.changeView('Messages', messages);
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={this.routeLink}>Login</button>
        <button onClick={this.routeLink}>Profile</button>
        <button onClick={this.getMessages}>Messages</button>
        <this.state.view changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages} />
      </div>
    );
  }
}
      // {React.cloneElement(<this.state.view />, React.Children, this.props)}
      // {<this.state.view changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages} />}
      // changeView={this.changeView} {...this.state.appState} getMessages={this.getMessages}
export { Desklamp}; 
export {funcs};
