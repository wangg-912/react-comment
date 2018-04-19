import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TitleApp from "./TitleApp";

class Header extends Component{
    
    render(){
        return(
            <header>
                <h5 style={{color:this.context.themeColor}}>Header</h5>
                <TitleApp />
            </header>
        )
    }
}
Header.contextTypes = {
    themeColor:PropTypes.string
}
export default  Header