import React from 'react';
import ReactDOM from 'react-dom';

export default class Message extends React.Component{
  constructor(){
    super();
  }

render(){
  console.log(this.props);
//map through this.props.messages to display the entire list.
  var mess = this.props.messages.map(function(message, i){
    return (<li key={i} className="message">{message.text}|{message.user}@{message.time}</li>);
    });
  return(
    <div>
      <ul>{mess}</ul>
    </div>
  )
}
}

//Message.propTypes = { messageValue : React.PropTypes.text };
