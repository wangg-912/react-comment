import React, { Component } from 'react';

export default class AppInput extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        this.input.focus();
    }
    render(){
        return(
            <div>
                <input ref={(input)=>this.input = input} type="text"/>
            </div>
        )
    }
}