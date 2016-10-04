import React from 'react';
import ReactDOM from 'react-dom';

const Test = ({ messages }) => {
  return (
    <div>
      {messages.map(function(message){
        return message.message;
      })}
    </div>
  )
 
}

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Test {...this.props.appState} />
      </div>
    );
  }

}

export default Messages;
