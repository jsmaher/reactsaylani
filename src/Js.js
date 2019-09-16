import React, { Component } from 'react';

class Js extends Component {
  render(){
    return(
      <div>
      <h1 style={{backgroundColor:"red",color:"white"}}>{this.props.children}</h1>
        </div>
    )
  }
}
export default Js