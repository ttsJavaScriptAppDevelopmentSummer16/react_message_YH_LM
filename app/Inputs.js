import React from 'react';
import ReactDOM from 'react-dom';

export default class Inputs extends React.Component{
  constructor(){
    super();
      this.state = {
        userInput: "Dummy Text"
      }
  }
clickedButton(e){
    console.log('clicked!');
//  this.setState({userInput : event.target.value});
//  this.setState({userInput : this.refs.box1.value});
//  console.log(this.state.userInput);
//  console.log(`refs: ${this.refs.box1.value}`)
}

  // function handleChange(e){
  //   this.setState({value: event.target.value});
  //   console.log(this.state.value);
  // }

 //  handleChange = (e) => {
 //    preventDefault();
 //    this.setState({value: event.target.value});
 // }

render(){
  return(
    <div>
      <input type="text" ref="box1" defaultValue="type here" />
      <button onClick={this.clickedButton}>Save</button>
    </div>
  )
}
}
