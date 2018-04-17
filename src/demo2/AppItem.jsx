import React, { Component } from 'react';

export default class AppItem extends Component{
    constructor(){
        super();
    }
    componentWillUpdate() {
        console.log("组件重现渲染前调用！")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("查看组件是否重新渲染")
        return nextProps;
    }
    componentWillReceiveProps(nextProps){
        console.log("组件是否从父组件接收到新的props之前调用")
    }
    componentWillUnmount() {
        console.log("组件被销毁");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("组建重新加载后渲染","前一个属性"+JSON.stringify(prevProps),"前一个属性"+prevState)
    }
    
    render(){
        return(
            <div className="app-item">
                {this.props.type?"显示状态":"隐藏状态"}
            </div>
        )
    }
}
