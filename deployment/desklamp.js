import React from 'react';

const Nav = (...views) => {
  return (
    views.forEach((view) => {
      return
    })
  );
};

const Desklamp = {};

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      view: '',
      renderNav: true,
      appState: {},
      views: {},
      userFunctions: {
        changeView: this.changeView,
        routeLink: this.routeLink,
      },
    };
    // Array that stores the application history
    this.stateHistory = ['first_history'];
    // Adds addFuncs control to the Desklamp obj
    this.addFuncs = this.addFuncs.bind(this);
    Desklamp.addFunc = this.addFuncs;
    // Binds routing and view functions
    this.changeView = this.changeView.bind(this);
    this.routeLink = this.routeLink.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
    // Adds updateState and showState funcs to Desklamp obj
    this.updateState = this.updateState.bind(this);
    Desklamp.updateState = this.updateState;
    this.showState = this.showState.bind(this);
    Desklamp.showState = this.showState;
    // Adds history to Desklamp obj
    this.history = this.history.bind(this);
    Desklamp.history = this.history;
  }

  componentWillMount() {
    window.onhashchange = () => {
      const pathstring = location.hash;
      this.routeLink({ target: { innerHTML: pathstring.replace('#/', '') } });
    };
    this.getRoutes();
  }

  getRoutes(startRoute) {
    const newRoutes = {};
    if (!startRoute) {
      startRoute = this.props.children[0].type;
    }
    this.props.children.forEach( (route) => {
      newRoutes[route.type.name] = route.type;
    });
    const newState = Object.assign({}, this.state.views, newRoutes);
    this.setState({ views: newState, view: startRoute });
  }

  // Allows the developer to update the state of their application
  updateState(newObj) {
    if (newObj === Object(newObj)) {
      // Save old appState to history
      this.history(this.state.appState);
      // Update appState with new state
      const newState = Object.assign({}, this.state.appState, newObj);
      this.setState({ appState: newState });
    } else {
      throw new Error('updateState(): arg must be an object.');
    }
  }

  // Displays the current application state
  showState() {
    return this.state.appState;
  }

  // Keeps a point in time snapshot of the application state
  history(newState) {
    console.log('current history - ', this.stateHistory);
    const oldHistory = this.stateHistory;
    this.stateHistory = [...oldHistory, newState];
    console.log('new history - ', this.stateHistory);
  }

  addFuncs(input) {
    if (input.constructor !== Object) {
      throw new TypeError('Input to addFuncs must be an object with methods that are functions');
    }
    for (let key in input) {
      if (input[key].constructor !== Function) {
        throw new TypeError(`Your input to addFuncs contains ${key} which is not a function`);
      }
      this.state.userFunctions[key] = input[key].bind(this);
    }
  }

  Nav(nav) {
    if (typeof nav === 'boolean') {
      this.state.renderNav = nav;
    } else {
      this.state.nav = nav;
    }
  }

  changeView(view, newState) {
    // update appState only by copying
    const appState = Object.assign({}, this.state.appState, newState);
    // update appState on this.state
    this.setState({ view: this.state.views[view], appState });
    window.location.hash = (`#/${view}`);
  }

  routeLink(view) {
    window.location.hash = (`#/${view.target.innerHTML}`); // TODO: let Dev pass in variable for url string
    this.setState({ view: this.state.views[view.target.innerHTML] }); // TODO: let Dev pass in variable for url string
  }

  render() {
    return (
      <div>
        
        <this.state.view changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages} />
      </div>
    );
  }
}
// {React.cloneElement(<this.state.view />, React.Children, this.props)}
// {<this.state.view changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages} />}
// changeView={this.changeView} {...this.state.appState} getMessages={this.getMessages}
// <this.state.nav {...this.state.views}/>
export { Container };
export { Desklamp };
