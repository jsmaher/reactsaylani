/////////////////////////////////////////Light On/Off Task//////////////////////////

// import React, { Component } from 'react'
// import './App.css';
// import Blubon from './images/lighton.jpg';
// import Bluboff from './images/lightoff.jpg';
// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       lighton : false
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <center>
//        <img src = {this.state.lighton ? Blubon : Bluboff} with="200"/>
// <br />
//  <button onClick={()=> this.setState({lighton : !this.state.lighton})}>
//   {this.state.lighton ? "Off" : "On"}
// </button> 
// </center>
//       </div>
//     )
//   }
// }
// export default App


// //////////////////////////////////////Todo App///////////////////////////////////////////////
// import React, { Component } from 'react'
// // import { timeout } from 'q';
// import './App.css';

// // 2nd Class for Practice
// class Home extends Component {
//   render() {
//     return (
//       <div>
//         <h1>home</h1>
//         <App name={'karachi'}  xx ={78} /></div>
//     )
//   }
// }





// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       item: '',
//       newProp: '',
//       arr: []
//     }
//   }
//   changeHandler(ev) {
//     this.setState({
//       item: ev.target.value
//     })
//   }
//   add() {
//     const { item, arr } = this.state;
//     const obj = {
//       todo: item
//     }
//     arr.push(obj)
//     this.setState({
//       item:'',
//       arr: arr,
//       click : false,
//     })
//   }

//   delete(j){
//     const {arr} = this.state;
//     arr.splice(j,1)
//     this.setState({
//       arr:arr,
//     })
//   }
//   edit(i,x){
//     // let pro = prompt("Enter Value",x);
//     let {arr} = this.state;
//     arr[i].click = true;
//     // const obj = {
//     //   todo: pro
//     // }
//     // arr.splice(i,1,obj);
//     this.setState({
//       arr:arr,
//       updateValue:x,
//     })
//   }
//   cancel(i,y){
//     const {arr} = this.state;
//     arr[i].click = false;

//     this.setState({
//       arr:arr,
//       updateValue:y,
//     })
//   }
//   update(i,value){
//     const{arr,updateValue} = this.state;

//     const obj ={
//       todo:updateValue
//     }
//     arr.splice(i,1,obj);
//     this.setState({
//       arr:arr,
//       updateValue:value
//     })
//   }
//   render() {
//     const { arr , item, updateValue} = this.state;
//     console.log(this.props)
//     return (
//       <div>
//         <h3>{this.state.newProp}</h3>
//         <h3>{this.props.name}</h3>
//         <center>
//           <input value={item}  onChange={this.changeHandler.bind(this)} placeholder='Enter Value' className="js" />

//           <button onClick={this.add.bind(this)} id="btnAdd" >Add</button>  
//           <button onClick={(e)=>this.setState({arr:[]})} id="btnClean" >Clean</button>  
//         <ol style={{ color: "red", fontSize: '32px' }}>
//           {arr.map((val, ind) => <li key={ind} >
//       {val.click ? <input type="text" value={updateValue} onChange={(e)=> this.setState({updateValue: e.target.value})} id="inputEdit"/>: val.todo}
//       {val.click ? <button onClick ={this.update.bind(this, ind,val.todo)} id="btnUpdate">Update</button> : <button onClick ={this.delete.bind(this, ind)} id="btnRemove">Remove</button>}
//       {val.click ? <button onClick ={this.cancel.bind(this, ind,val.todo)} id="btnCancel">Cancel</button> : <button onClick ={this.edit.bind(this, ind,val.todo)} id="btnEdit">Edit</button>}
//           </li>).reverse()}
//         </ol>
//         </center>

//       </div>
//     )
//   }
// }
// export default Home



// /   1st
import React, { Component } from 'react';
import Home from './Home'
class App extends Component {
  getDataFromChild(data){
    console.log(data)
  }
  render(){
    return(
      <div>
        <h1>Hello App.js</h1>
        <Home name="JS Rajput" func={this.getDataFromChild}/>
        </div>
    )
  }
}
export default App

///2nd
// import React, { Component } from 'react';
// import Js from './Js'
// import Darpan from './Darpan'

// class App extends Component {
//   render(){
//     return(
//       <div>
//         <h1>Hello App.js
//         </h1>
//         <Js>JS Rajput</Js> 
//         <br/>
//         <Darpan>Darpan Goswami</Darpan>
//         </div>
//     )
//   }
// }
// export default App



