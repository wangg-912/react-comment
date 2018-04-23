import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class Container extends Component{
    constructor(){
        super();
        this.state = {
            themeColor : "black"
        }
    }
    componentDidMount() {
        this.getChildContext();
    }
    handlerChangeOption(color){
        this.setState({
            themeColor:color
        })
    }
    getChildContext () {
        return { themeColor: this.state.themeColor }
    }
    render(){
        const colors = [
            {code:"red",name:"红色"},
            {code:"green",name:"绿色"},
            {code:"black",name:"默认"}
        ]
        return(
            <div>
                <Header />
                <Main colors={colors} themeColor={this.state.themeColor} onChangeColor={this.handlerChangeOption.bind(this)} />
                <Footer />
            </div>
        )
    }
}
Container.childContextTypes={
    themeColor:PropTypes.string
}
export default Container