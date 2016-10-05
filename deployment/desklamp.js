import React from 'react';

const funcs = {};

class Desklamp extends React.Component {
  constructor() {
    super();
    this.state = {
      view: '',
      appState: {},
      views: {},
      userFunctions: {},
    };
    this.changeView = this.changeView.bind(this);
    this.routeLink = this.routeLink.bind(this);
    this.getRoutes = this.getRoutes.bind(this);
  }

  componentWillMount() {
    window.onhashchange = () => {
      const pathstring = location.hash;
      this.routeLink({ target: { innerHTML: pathstring.replace('#/', '') } });
    };
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
export { Desklamp };
export { funcs };
