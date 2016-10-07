import React from 'react';

// how to make view the same name as the changed name in the RenderDOM
const Link = ({ view, tag }) => {
  return (
    <a href={`#${view}`} >{tag}</a>
  );
};

const SyncLink = ({ view, func }) => {
  return (
    <a onClick={func}>{view.name}</a>
  );
};

// const Nav = ({ views }) => {
//   const viewArr = Object.keys(views).map(key => views[key]);
//   return (
//     <div className="nav">
//       {viewArr.map((view, index) => {
//         return (<Link key={index} view={view} />);
//       })}
//     </div>
//   );
// };

const Desklamp = {};

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      view: '',
      renderNav: false,
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
    window.onhashchange = () => {
      const pathstring = location.hash;
      this.routeLink(pathstring.replace('#/', ''));
    };
    this.getRoutes();
    this.onLoad();
  }

  // Runs all functions passed to onLoad
  onLoad(...args) {
    args.forEach((func) => {
      func();
    });
  }

  getRoutes(startRoute) {
    const newRoutes = {};
    // if no starting route passed in, go get starting route from first child
    if (!startRoute) {
      // if there are no children of container, default route is '/'
      if (!this.props.children){
        startRoute = '';
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
    }

    const newState = Object.assign({}, this.state.views, newRoutes);
    const routeName = this.props.children[0].type.name.toLowerCase();
    window.location.hash = (`#/${routeName}`);
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
  on(initState, userFuncs, startRoute, navbar) {
    if (initState.constructor !== Object && initState !== undefined) {
      throw new TypeError('on(): takes an object as a first parameter representing initial state');
    }
    if (userFuncs.constructor !== Object && userFuncs !== undefined) {
      throw new TypeError('on(): takes an object as a second parameter which contains functions');
    }
    if (typeof startRoute !== 'string' && startRoute !== undefined && startRoute !== null) {
      throw new TypeError('on(): takes a string as a third param which sets the default route');
    }
    // if (typeof navbar !== 'boolean' && navbar !== undefined) {
    //   throw new TypeError('on(): takes a boolean as a fourth param; true if you want our navbar');
    // }
    // Update the state to passed in initial state
    this.updateState(initState);
    // Add userFuncs to the userFunctions object
    this.addFuncs(userFuncs);
    // If there is a startRoute param, update routes with it
    if (startRoute) {
      this.state.view = startRoute; //change######
      // or - this.changeView(startRoute);
    }
    // If navbar param is set to true we add navbar as the first children
    if (navbar) {
      this.setState({renderNav: navbar}); //CHANGE THIS#######
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
    if (typeof view !== 'string') {
      throw new Error('changeView(): takes a string as a first parameter');
    }
    // update appState only by copying
    const notAppState = Object.assign({}, this.state.appState, newState);
    // update appState on this.state
    this.setState({ appState: notAppState });
    window.location.hash = (`#/${view}`);
  }

  routeLink(view) {
    // window.location.hash = (`#/${view}`); // now we're setting this in Link component
    this.setState({ view: this.state.views[view] }); // TODO: let Dev pass in variable for url string
  }

  render() {
    const navBar = (this.state.renderNav) ? <this.state.renderNav /> : undefined;
    return (
      <div>
        {navBar}
        <this.state.view powers={this.state.userFunctions} state={this.state.appState} />
      </div>
    );
  }
}
export { Container };
export { Desklamp };
export { Link };
