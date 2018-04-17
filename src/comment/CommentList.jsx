import React, { Component } from 'react';
import CommentItem from "./CommentItem";

export default class CommentList extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="comment-list">
            {this.props.commentList.map((user,i)=><CommentItem key ={i} user = {user} />)}
            </div>
        )
    }
}
