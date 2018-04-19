import React,{Component} from 'react';
import { render } from 'react-dom';

import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default class CommentApp extends Component{
    
    componentWillMount() {
        this._loadComments();
    }
    _loadComments(){
        const comments = localStorage.getItem("comments");
        if(comments){
            const _comments = JSON.parse(comments);
            this.setState({
                commentList:_comments
            })
        }
    }
    constructor(){
        super();
        this.state = {
            commentList:[]
        };
    }
    _saveComments(comments){
        localStorage.setItem("comments",JSON.stringify(comments))
    }
    handleSubmitComment(param){
        if (!param) return
        if (!param.username) return alert('请输入用户名')
        if (!param.content) return alert('请输入评论内容')
        this.state.commentList.push(param);
        this.setState({
            commentList:this.state.commentList
        })
        this._saveComments(this.state.commentList)
    }
    handlerDeleteComment(index){
        const comments = this.state.commentList
        comments.splice(index, 1)
        this.setState({ 
            commentList:comments
        })
        this._saveComments(this.state.commentList)
    }
    render(){
        return(
            <div className="comment-app">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList commentList = {this.state.commentList} onDeleteComment={this.handlerDeleteComment.bind(this)} />
            </div>
        )
    }
}
