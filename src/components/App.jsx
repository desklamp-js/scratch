import React from 'react';
import Nav from './Nav';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        {React.cloneElement(githis.props.children, this.props)}
      </div>
      );
  }
}


export default App;
