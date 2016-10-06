import React from 'react';

const Link = ({ routeLink, view }) => {
  return (
    <a href={`#/${view.name}`} >{view.name}</a>
  );
};

const Nav = ({ routeLink, views }) => {
  const viewArr = Object.keys(views).map(key => views[key]);
  return (
    <div className="nav">
      {viewArr.map((view, index) => {
        return (<Link key={index} routeLink={routeLink} view={view} />);
      })}
    </div>
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
    // Adds the on function to Desklamp obj
    this.on = this.on.bind(this);
    Desklamp.on = this.on;
  }

  componentWillMount() {
    window.onhashchange = () => {
      const pathstring = location.hash;
      this.routeLink(pathstring.replace('#/', ''));
    };
    this.getRoutes();
  }

  getRoutes(startRoute) {
    const newRoutes = {};
    //if no starting route passed in, go get starting route from first child.
    if (!startRoute) {
      //if there are no children of container, default route is '/'
      if (!this.props.children){
        startRoute = '';
        throw new TypeError('Container must have children components in order to create Routes');
      }
      else{
        startRoute = this.props.children[0].type;
        this.props.children.forEach( (route) => {
          newRoutes[route.type.name] = route.type;
    });
      }
    }
    
    const newState = Object.assign({}, this.state.views, newRoutes);
    window.location.hash = (`#/${this.props.children[0].type.name}`);
    this.setState({ views: newState, view: startRoute });
  }

  // Allows the developer to update the state of their application
  updateState(newObj) {
    if (newObj.constructor === Object) {
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

  // Initializes the default state, user functions, start route and navbar.
  on(initState, userFuncs, startRoute, navbar) {
    if (initState.constructor !== Object && initState !== undefined) {
      throw new TypeError('on(): takes an object as a first parameter representing initial state');
    }
    if (userFuncs.constructor !== Object && userFuncs !== undefined) {
      throw new TypeError('on(): takes an object as a second parameter which contains functions');
    }
    if (typeof startRoute !== 'string' && startRoute !== undefined) {
      throw new TypeError('on(): takes a string as a third param which sets the default route');
    }
    if (typeof navbar !== 'boolean' && navbar !== undefined) {
      throw new TypeError('on(): takes a boolean as a fourth param; true if you want our navbar');
    }
    // Update the state to passed in initial state
    this.updateState(initState);
    // Add userFuncs to the userFunctions object
    this.addFuncs(userFuncs);
    // If there is a startRoute param, update routes with it
    if (startRoute) {
      this.state.view = startRoute;
      // or - this.changeView(startRoute);
    }
    // If navbar param is set to true we add navbar as the first children
    if (navbar) {
      this.Nav(true);
    }
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

  nav(nav) {
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
    // window.location.hash = (`#/${view}`); // now we're setting this in Link component
    this.setState({ view: this.state.views[view] }); // TODO: let Dev pass in variable for url string
  }

  render() {
    return (
      <div>
        <Nav routeLink={this.routeLink} views={this.state.views} />
        <this.state.view changeView={this.changeView} appState={this.state.appState} getMessages={this.getMessages} />
      </div>
    );
  }
}
export { Container };
export { Desklamp };
export { Link };
