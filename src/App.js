import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  jumpstarters = [{name:"Xinfang",value:1}, {name:"Sheldon",value:5}, {name:"Sebastian",value:2}, {name:"Brian",value:6}, {name:"Huimin",value:5}, {name:"Calvin",value:3}, {name:"Shun",value:4}, {name:"Tim",value:2}, {name:"Delph",value:7}, {name:"Kaixin",value:2}]
  render() {
    return (
      <div className="App center">
        {this.jumpstarters.map((person)=><Counter name={person.name} value={person.value} />)}
      </div>
    );
  }
}

export default App;
