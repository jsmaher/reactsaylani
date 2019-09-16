import React, { Component } from 'react';

class Darpan extends Component {
  render(){
    return(
      <div>
      <h1 style={{backgroundColor:"Dodgerblue",color:"white"}}>{this.props.children}</h1>
        </div>
    )
  }
}
export default Darpan