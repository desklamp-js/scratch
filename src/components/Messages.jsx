import React from 'react';

const Test = ({messages}) => {
  return (
    <div>
      {messages.map((message) => {
        return message.message;
      })}
      
    </div>
  );
};

class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Test {...this.props.appState} />
    );
  }

}

export default Messages;
