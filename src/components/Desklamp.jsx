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
    this.routeLink = this.routeLink.bind(this);
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
    this.setState({ view: this.state.views[view] , appState: appState});
  }
  routeLink(view){
    let page = Object.assign({}, window.history.state, {page: view.target.innerHTML});
    window.location.hash = ("#/" + view.target.innerHTML);
    this.setState({ view: this.state.views[view.target.innerHTML]});
  }


  render(){
    return ( 
      <div>
        <button onClick={this.routeLink}>Login</button>
        <button onClick={this.routeLink}>Profile</button>
        {<this.state.view changeView={this.changeView} appState = {this.state.appState}/>}
      </div>
    )
    
  }

}

export default Desklamp;