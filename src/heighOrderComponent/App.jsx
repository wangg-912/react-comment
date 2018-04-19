import React, { Component } from 'react';
import AppInput from "./AppInput";

export default class App extends Component{
    render(){
        return(
            <div>
                用户名:<AppInput  /> 
            </div>
        )
    }
}