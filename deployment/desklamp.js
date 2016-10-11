import React from 'react';

// Custom link component
const Link = ({ view, tag }) => {
  return (
    <a href={`#/${view}`} >{tag}</a>
  );
};

// const SyncLink = ({ view, func }) => {
//   return (
//     <a onClick={func}>{view.name}</a>
//   );
// };

 
// Object that contains all functions
const Desklamp = {};

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      view: '',
      renderNav: '',
      appState: {},
      views: {},
      userFunctions: {},
    };
    // Array that stores the application history
    this.stateHistory = ['first_history'];
    // Adds addFuncs control to the Desklamp obj
    this.addFuncs = this.addFuncs.bind(this);
    Desklamp.addFunc = this.addFuncs;
    // Binds routing and view functions
    this.changeView = this.changeView.bind(this);
    Desklamp.changeView = this.changeView;
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
    // Allows the developer to use the componentWillMount on Container component
    this.onLoad = this.onLoad.bind(this);
    Desklamp.onLoad = this.onLoad;
  }

  componentWillMount() {
    // If the url hash changes, routing is triggered
    window.onhashchange = () => {
      const pathstring = location.hash;
      this.routeLink(pathstring.replace('#/', ''));
    };
    this.getRoutes();
    this.onLoad();
  }

<<<<<<< HEAD
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
=======
  // Runs all functions passed to onLoad
  onLoad(...args) {
    args.forEach((func) => {
      func();
    });
  }

  getRoutes() {
    const newRoutes = {};
    let startRoute;

    if (!this.props.children){
      throw new TypeError('Container must have children components in order to create Routes');
    } else {
      startRoute = this.props.children[0].type;
      this.props.children.forEach( (route) => {
        if (typeof route.props.name === 'string') {
          newRoutes[route.props.name] = route.type;
        } else {
          const routeName = route.type.name.toLowerCase();
          newRoutes[routeName] = route.type;
        }
      });
    }
    const newState = Object.assign({}, this.state.views, newRoutes);
    const routeName = this.props.children[0].props.name || this.props.children[0].type.name.toLowerCase();
    window.location.hash = (`#/${routeName}`);
>>>>>>> bde304378a44d78bddf6daa78e772c64170e9d5f
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
    const oldHistory = this.stateHistory;
    this.stateHistory = [...oldHistory, newState];
  }

  // Initializes the default state, user functions, start route and navbar.

  on(initState, userFuncs, routeProps, navbar) {

    if (initState.constructor !== Object && initState !== undefined) {
      throw new TypeError('on(): takes an object as a first parameter representing initial state');
    }
    if (userFuncs.constructor !== Object && userFuncs !== undefined) {
      throw new TypeError('on(): takes an object as a second parameter which contains functions');
    }
<
    if (routeProps.constructor !== Object && routeProps !== undefined) {

      throw new TypeError('on(): takes a string as a third param which sets the default route');
    }
    if (navbar.constructor !== Function && navbar !== undefined) {
      throw new TypeError('on(): takes a boolean as a fourth param; true if you want our navbar');
    }
    // Update the state to passed in initial state
    this.updateState(initState);
    // Add userFuncs to the userFunctions object
    this.addFuncs(userFuncs);

    // If there is a routeProps param, update routes with it
    const propsUpdate = {};
    if (routeProps) {
      Object.keys(routeProps).forEach((key) => {
        propsUpdate[key] = {};
        Object.keys(routeProps[key]).forEach((arrKey) => {
          routeProps[key][arrKey].forEach((item) => {
            const pull = (arrKey === 'state') ? 'appState' : 'userFunctions';
            propsUpdate[key][item] = this.state[pull][item];
          });
        });
      });
    }
    // If navbar param is set to true we add navbar as the first children
    if (!navbar) {
      navbar = undefined;
    }
    this.setState({ routeStates: propsUpdate, renderNav: navbar });
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

  changeView(view, newState) {
    if (typeof view !== 'string') {
      throw new Error('changeView(): takes a string as a first parameter');
    }
    if (newState.constructor !== Object) {
      throw new Error('changeView(): takes an object as a second parameter');
    }
    // update appState only by copying
    const notAppState = Object.assign({}, this.state.appState, newState);
    // update appState on this.state
    this.setState({ appState: notAppState });
    window.location.hash = (`#/${view}`);
  }

  routeLink(view) {
    this.setState({ view: this.state.views[view] }); // TODO let Dev pass in variable for url string
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
    const navBar = (this.state.renderNav) ? <this.state.renderNav /> : undefined;
    const inputs = this.state.routeStates[window.location.hash.replace('#/', '').toLowerCase()];
    return (
      <div>
        {navBar}
        <this.state.view state={this.state.appState} powers={this.state.userFunctions} />
      </div>
    );
  }
}
export { Container };
export { Desklamp };
export { Link };
