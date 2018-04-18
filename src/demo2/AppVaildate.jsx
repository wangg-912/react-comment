import React, { Component } from 'react';
import PropTypes from "prop-types";

class AppVaildate extends Component{
   
    constructor(){
        super()
    }
    
    render(){
        return(
            <div>
            {this.props.name}
            </div>
        )
    }
}
AppVaildate.propTypes = {
    name: PropTypes.string.isRequired
  };
export default AppVaildate;