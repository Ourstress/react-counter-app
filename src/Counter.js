import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };  
  }
  increment = () => {
    this.setState({value:this.state.value+1})
  }
  decrease = () => {
    this.setState({value:this.state.value-1})
  }
  render() {
    return (
      <div className="border border-warning rounded">
        <h1>{this.props.name}</h1>
        <h3 className={(this.state.value===0)?"bg-secondary": (this.state.value>0)?"bg-primary":"bg-danger"}>{(this.state.value===0)?"zero": (this.state.value>0)? "positive":"negative"}</h3>
        <h1 className="big">{this.state.value}</h1>
        <button className="btn btn-primary btn-lg m-2" onClick={this.increment}>+</button>
        <button className="btn btn-danger btn-lg" onClick={this.decrease}>-</button>
      </div>
    );
  }
}

export default Counter;
