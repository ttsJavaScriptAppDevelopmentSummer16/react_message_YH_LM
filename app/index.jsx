import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.js';
import Inputs from './Inputs.js';

export default class HelloMessage extends React.Component {
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
      return (
        <div>
          <Inputs />
          <Message {...this.state} />
        </div>

      );
  }
}
var mountPoint = document.querySelector('#root');
ReactDOM.render(<HelloMessage/>, mountPoint);
