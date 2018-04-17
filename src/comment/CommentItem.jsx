import React, { Component } from 'react';

export default class CommentItem extends Component{
    constructor() {
        super()
    }
    render(){
        return(
            <div>
                <span className="item-name">{this.props.user.username}:</span>
                <span className="item-content">{this.props.user.content}</span>
            </div>
        )
    }
}
