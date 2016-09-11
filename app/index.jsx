import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
            text : 'Hello World!',
            time: '12:00 PM',
            user: 'User01'
        },
        {
          text : 'Hello World02!',
          time: '11:00 PM',
          user: 'User02'
        },
        {
          text : 'Hello World03!',
          time: '1:00 PM',
          user: 'User03'
        }
      ]
    }
  }


  render() {
      var mess = this.state.messages.map(function(message, i){
          return (<li key={i} className="message">{message.text}|{message.user}@{message.time}</li>);
      });

      return (
          <ul>{mess}</ul>
      );
  }
}

var mountPoint = document.querySelector('#root');
ReactDOM.render(<HelloMessage/>, mountPoint);
