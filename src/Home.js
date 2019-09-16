import React, { Component } from 'react';
class Home extends Component {
  render(){
  console.log("Props===>",this.props)
    return(
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.props.func("js rajput")}>Send</button>
        </div>
    )
  }
}
export default Home