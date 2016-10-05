import React from 'react';
import Login from './Login'; // won't know about until User tells us'
import Profile from './Profile';
import Messages from './Messages';
import $ from 'jquery'; // not for deploy

const funcs = {};

class Desklamp extends React.Component {
  constructor() {
    super();
    this.state = {
      view: '',
      current_uri: '/',
      appState: {
        random: 'hi',
        boo: 'boo',
      },
      views: {
        // Login: Login,
        // Profile: Profile,
        // Messages: Messages,
      },
    };
    this.changeView = this.changeView.bind(this);
    this.routeLink = this.routeLink.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
  }

  // log(){
  //   console.log('hello');
  // }

  componentWillMount() {
    this.getRoutes();
    window.onhashchange = (e) => {
      const pathstring = location.hash;
      this.routeLink({ target: { innerHTML: pathstring.replace("#/", "") } });
    };
  }

  changeView(view, newState) {
    // update appState only by copying
    const appState = Object.assign({}, this.state.appState, newState);
    //update appState on this.state
    this.setState({ view: this.state.views[view], appState: appState });
    window.location.hash = ("#/" + view);
  }

  routeLink(view) {
    window.location.hash = ("#/" + view.target.innerHTML);
    this.setState({ view: this.state.views[view.target.innerHTML] });
  }

  getMessages() {
    let that = this;
    $.get("http://slack-server.elasticbeanstalk.com/messages", function (data) {
      const messages = { messages: data };
      that.changeView('Messages', messages);
    });
  }

  getRoutes(startRoute) {
    const newRoutes = {};
    if (!startRoute) {
      startRoute = this.props.children[0].type
    }
    this.props.children.forEach(function (route) {
      newRoutes[route.type.name] = route.type;
    });
    const newState = Object.assign({}, this.state.views, newRoutes);
    this.setState({ views: newState, view: startRoute });
  }

  render() {
    return (
      <div>
        <button onClick={this.routeLink}>Login</button>
        <button onClick={this.routeLink}>Profile</button>
        <button onClick={this.getMessages}>Messages</button>
        <this.state.view  changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages}/>
      </div>
    );
  }
}
// {React.cloneElement(<this.state.view />, React.Children, this.props)}
// {<this.state.view changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages} />}
// changeView={this.changeView} {...this.state.appState} getMessages={this.getMessages}
// changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages}
export { Desklamp};
export {funcs};
