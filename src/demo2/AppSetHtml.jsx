// 使用dangerouslySetInnerHTML,其中__html相等于innerHTML
import React, { Component } from 'react';
import AppStyle from "./AppStyle";

export default class AppSetHtml extends Component{
    constructor(){
        super();
        this.state = {
            "content":"<h3>我没有引用使用 dangerouslySetInnerHTML方法</h3>",
            "dcontent":"<h3>我有引用使用 dangerouslySetInnerHTML方法</h3>"
        }
    }
    render(){
        return(
            <div>
                <AppStyle />
                <p>{this.state.content}</p>
                <p dangerouslySetInnerHTML={{__html:this.state.dcontent}}></p>
            </div>
        )
    }
}