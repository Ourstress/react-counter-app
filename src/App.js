import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {    
      jumpstarters : [{name:"Xinfang",value:1}, {name:"Sheldon",value:5}, {name:"Sebastian",value:2}, {name:"Brian",value:6}, {name:"Huimin",value:5}, {name:"Calvin",value:3}, {name:"Shun",value:4}, {name:"Tim",value:2}, {name:"Delph",value:7}, {name:"Kaixin",value:2}]
    };
  }
  removeJumpstarter = (name) => {
    const newState = this.state;
    const index = newState.jumpstarters.findIndex(a => a.name === name);
    if (index === -1) return;
    newState.jumpstarters.splice(index, 1);
    this.setState(newState); // This will update the state and trigger a rerender of the components
  }

  reset = () => {
    const newState = this.state;
    newState.jumpstarters.map(a=>a.value=0)
    this.setState(newState)
    }
  increment = (name) => {
    const newState = this.state;
    let index = newState.jumpstarters.findIndex(a => a.name === name)
    newState.jumpstarters[index].value +=1
    this.setState(newState)
  }
  decreament = (name) => {
    const newState = this.state;
    let index = newState.jumpstarters.findIndex(a => a.name === name)
    newState.jumpstarters[index].value -= 1
    this.setState(newState)  }
  render() {
    return (
      <div className="App center">
        {this.state.jumpstarters.map((person)=><Counter key={person.name} name={person.name} value={person.value} removeJumpstarter={this.removeJumpstarter} reset={this.reset} increase={this.increment} decrease={this.decreament}/>)}
        <button className="btn btn-danger btn-lg" onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default App;
