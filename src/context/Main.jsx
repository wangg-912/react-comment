import React, { Component } from 'react';
import PropTypes from 'prop-types';


import SelectList from "./SelectList"
import Content from "./Content";

class Main extends Component{
    constructor(){
        super();
    }
    handlerChangeOption(event){
        if(this.props.onChangeColor){
            this.props.onChangeColor(event.target.value)
        }
    }
    render(){
        return(
            <section>
                <h5 style={{color:this.context.themeColor}}>Section</h5>
                <div style={{color:this.context.themeColor}}>
                    更换主题：<select defaultValue={this.props.themeColor} onChange={this.handlerChangeOption.bind(this)} style={{color:this.context.themeColor}}>
                        {this.props.colors.map((color,i) => <SelectList key={i} list={color} />)}
                    </select>
                </div>
                <Content />
            </section>
        )
    }
}
Main.contextTypes = {
    themeColor:PropTypes.string
}

export default Main