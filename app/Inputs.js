import React from 'react';
import ReactDOM from 'react-dom';

export default class Inputs extends React.Component{
  constructor(){
    super();
    this.state = {
      dummyStateText : 'miller'
    }
  }

handleChange(event){
  var text = event.target.value;
  console.log(text);
  this.setState({inputText: event.target.value});
}

handleSubmit(event){
  event.preventDefault();
  //this.props and this.state are both null  CANNOT READ PROPERTY PROPS OF NULL
  //i would like to run a callback function to the parent to add to the messages array.
  this.props.addMessage(this.state.inputText);
}


//app freaks out when value={} is added to <input/>
render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange.bind(this)}  />
      <button onClick={this.props.addMessage}>Save</button>
      </form>
    </div>
  )
}
}
// Could try on click and get rid of form
// <button onClick={this.clickedButton.bind(this)}>Save</button>
//Other things tried in handleChange:
//  this.setState({text: text});
//  this.setState({newItem: event.target.value});
//  this.setState({newItem: text});
