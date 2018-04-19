import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Content from "./Content";

class Main extends Component{
    render(){
        return(
            <section>
                <h5 style={{color:this.context.themeColor}}>Section</h5>
                <Content />
            </section>
        )
    }
}
Main.contextTypes = {
    themeColor:PropTypes.string
}

export default Main