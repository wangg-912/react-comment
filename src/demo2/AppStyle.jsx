// react 中内嵌样式的写法

import React, { Component } from 'react';

export default class AppStyle extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div style={{color:'red'}}>红色的字</div>
        )
    }
}

