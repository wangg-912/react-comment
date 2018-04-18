import React, { Component } from 'react';
import AppInput from "./AppInput";
import AppItem from "./AppItem";
import AppClock from "./AppClock";
import AppChildren from "./AppChildren";
import AppSetHtml from "./AppSetHtml";

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
                <AppInput />
                <hr/>
                <AppChildren>
                    <p>我是第一队数据！</p>
                    <p>我是第二队数据！</p>
                    <p>我是第三队数据！</p>
                </AppChildren>
                <hr/>
                <AppSetHtml />
                <hr/>
                {this.state.isShow?<AppClock />:null}
                <hr/>
                <AppItem type={this.state.isShow} />
            </div>
        )
    }
}

