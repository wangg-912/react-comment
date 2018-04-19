import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleApp extends Component{
    render(){
        return(
            <div>
                <h5 style={{color:this.context.themeColor}}>DEMO</h5>
            </div>
        )
    }
}
TitleApp.contextTypes  = {
    themeColor:PropTypes.string
}

export default TitleApp