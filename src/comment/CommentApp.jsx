import React,{Component} from 'react';
import { render } from 'react-dom';

import CommentInput from "./CommentInput";
import CommentList from "./CommentList";


export default class CommentApp extends Component{
    constructor(){
        super();
        this.state = {
            commentList:[]
        };
    }
    handleSubmitComment(param){
        if (!param) return
        if (!param.username) return alert('请输入用户名')
        if (!param.content) return alert('请输入评论内容')
        this.state.commentList.push(param);
        this.setState({
            commentList:this.state.commentList
        })
    }
    render(){
        return(
            <div className="comment-app">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList commentList = {this.state.commentList} />
            </div>
        )
    }
}
