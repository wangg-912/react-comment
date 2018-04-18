// react 中内嵌样式的写法

import React, { Component } from 'react';
import AppVaildate from "./AppVaildate";

export default class AppStyle extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{color:'red'}}>红色的字
            <AppVaildate name={'123'}/>
            </div>
        )
    }
}

