import React, { Component } from 'react';

export default class AppItem extends Component{
    constructor(){
        super();
    }
    componentWillUnmount() {
        console.log("组件被销毁");
    }
    render(){
        return(
            <div className="app-item">
                这里是容器！
            </div>
        )
    }
}
