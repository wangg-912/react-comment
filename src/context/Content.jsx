import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component{
    render(){
        return(
            <div>
                <p style={{color:this.context.themeColor}}>容器</p>
            </div>
        )
    }
}
Content.contextTypes = {
    themeColor:PropTypes.string
}

export default  Content;