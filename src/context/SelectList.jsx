import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectList extends Component{
    render(){
        return(
        <option value={this.props.list.code} style={{color:this.context.themeColor}}>{this.props.list.name}</option>
    )
    }
}
SelectList.contextTypes={
    themeColor:PropTypes.string
}
export default SelectList