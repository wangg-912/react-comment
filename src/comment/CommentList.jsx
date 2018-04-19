import React, { Component } from 'react';
import CommentItem from "./CommentItem";

export default class CommentList extends Component{
    constructor(props){
        super(props);
    }
    handlerDeleteComment(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return(
            <div className="comment-list">
            {this.props.comments.map((user,i)=>{
                return <CommentItem onDeleteComment={this.handlerDeleteComment.bind(this)}  key ={i} user = {user}  />
            })}
            </div>
        )
    }

}
