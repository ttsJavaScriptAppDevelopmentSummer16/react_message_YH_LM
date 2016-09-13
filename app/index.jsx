import React from 'react';
import ReactDOM from 'react-dom';

class MessageItem extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      // <li className="message"> {this.props.message.text} | {this.props.message.user} | <button  onClick={this.props.onEdit}>Edit</button> </li>
      <li className="message"> <button>Edit</button>  {this.props.message.text} | {this.props.message.user}  </li>
    );
  }
}

class MessageList extends React.Component {
        constructor() {
            super();
            this.state = {
                messages: [{
                    text: 'Hello World!',
                    time: '12:00 PM',
                    user: 'User01'
                }, {
                    text: 'Hello World02!',
                    time: '11:00 PM',
                    user: 'User02'
                }, {
                    text: 'Hello World03!',
                    time: '1:00 PM',
                    user: 'User03'
                }],
                newItem: ''
            }
        }
        _updateNewItem(event) {
                this.setState({
                    newItem: event.target.value
                })
        }
            //Adding a click event handler to the button
        _handleClick(event) {
            if(this.state.newItem.length === 0 ){
              return;
            }
            var newMessages = this.state.messages;
            newMessages.push({text:this.state.newItem,time:"9:40",user:"luiser"});
            this.setState({messages : newMessages})

            this.setState({newItem: ""});
        }

        _handleEdit(event){
          console.log(messageItem);
        }


  render() {
      var mess = this.state.messages.map(function(msg, i){
          // return  <MessageItem key={i} message={msg} onEdit={this._handleEdit.bind(this)}/>
          return  <MessageItem key={i} message={msg}/>
      });

      return (
          <div>
            <input type="text" value={this.state.newItem} onChange={this._updateNewItem.bind(this)} />
            <button onClick={this._handleClick.bind(this)}>Submit</button>
            <ul>{mess}</ul>
          </div>
      );
  }
}

var mountPoint = document.querySelector('#root');
ReactDOM.render(<MessageList/>, mountPoint);
