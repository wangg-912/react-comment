import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SelectList from "./SelectList";
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
    handlerChangeOption(event){
        
        this.setState({
            themeColor:event.target.value
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
                <div>
                    <select ref={(select)=>this.select = select} defaultValue={this.state.themeColor} onChange={this.handlerChangeOption.bind(this)}>
                        {colors.map((color,i) => <SelectList key={i} list={color} />)}
                    </select>
                </div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
Container.childContextTypes={
    themeColor:PropTypes.string
}
export default Container