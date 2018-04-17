import React, { Component } from 'react';

import AppItem from "./AppItem";
import AppClock from "./AppClock";

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            isShow:false
        }
    }
    handlerClick(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    
    componentWillMount() {
        console.log("开始渲染");
    }
    componentDidMount() {
        console.log("渲染之后");
    }
    
    
    render(){
        return(
            <div className="app">
                <button onClick={this.handlerClick.bind(this)}>{this.state.isShow?"隐藏":"显示"}</button>
                <hr/>
                {this.state.isShow?<AppClock />:null}
                <hr/>
                {this.state.isShow?<AppItem />:null}
            </div>
        )
    }
}

