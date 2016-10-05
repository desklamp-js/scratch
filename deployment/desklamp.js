import React from 'react';

const Desklamp = {};

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      view: '',
      appState: {},
      views: {},
      userFunctions: {
        changeView: this.changeView,
        routeLink: this.routeLink,
      },
    };
    this.changeView = this.changeView.bind(this);
    this.routeLink = this.routeLink.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
    this.addFuncs = this.addFuncs.bind(this);
    Desklamp.addFunc = this.addFuncs;
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

  addFuncs(input) {
    if (input.constructor !== Object) {
      throw new TypeError('Input to addFuncs must be an object, whos methods are the functions you wish to add');
    }
    for (let key in input) {
      if (input[key].constructor !== Function) {
        throw new TypeError(`Your input to addFuncs contains ${key} which is not a function`);
      }
      this.state.userFunctions[key] = input[key].bind(this);
    }
    console.log(this.state.userFunctions);
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
export { Container };
export { Desklamp };
