import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="border border-warning rounded">
        <h1>{this.props.name}</h1>
        <h3 className={(this.props.value===0)?"bg-secondary": (this.props.value>0)?"bg-primary":"bg-danger"}>{(this.props.value===0)?"zero": (this.props.value>0)? "positive":"negative"}</h3>
        <h1 className="big">{this.props.value}</h1>
        <button className="btn btn-success btn-lg m-2" onClick={()=> this.props.increase(this.props.name)}>+</button>
        <button className="btn btn-primary btn-lg" onClick={()=> this.props.decrease(this.props.name)}>-</button>
        <button className="btn btn-danger btn-lg" onClick={()=> this.props.removeJumpstarter(this.props.name)}>delete</button>
      </div>
    );
  }
}

export default Counter;
