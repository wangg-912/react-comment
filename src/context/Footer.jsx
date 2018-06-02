import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component{
    render(){
        return(
            <footer>
                <h5 style={{color:this.context.themeColor}}>Footer</h5>
                <p style={{color:this.context.themeColor}}>底部123456</p>
            </footer>
        )
    }
}
Footer.contextTypes = {
    themeColor:PropTypes.string
}

export default Footer;