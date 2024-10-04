import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class Incrdecr extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    plus=()=>{
        this.setState({count:this.state.count+1});
    }
    minus=()=>{
        this.setState({count:this.state.count-1});
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return(
            <>
                    <h1>Counter App</h1>
                    <div id="div1">
                        <br /><br />
                        <hr />
                    <button id="btn1" onClick={this.plus}>Increment</button>
                    <span>{this.state.count}</span>
                    <button id="btn2" onClick={this.minus}>Decrement</button>
                    <div><button id="btn3" onClick={this.reset}>Reset</button></div>
                    </div>
                
            </>
        )
    }
}
