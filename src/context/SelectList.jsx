import React, { Component } from 'react'

export default class SelectList extends Component{
    render(){
        return(
        <option value={this.props.list.code}>{this.props.list.name}</option>
    )
    }
}