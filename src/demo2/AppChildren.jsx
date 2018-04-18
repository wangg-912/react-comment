// props.children 与组件类控件
import React, { Component } from 'react';

export default class AppChildren extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="app-child">
                <div className="app-child-box">
                    { this.props.children }
                </div>
            </div>
        )
    }
}