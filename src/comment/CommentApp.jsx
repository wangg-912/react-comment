import React,{Component} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';



import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import LocalStorageApp from "./CommentContainer";

class CommentApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments:props.data ? props.data :[]
        };
    }
    handleSubmitComment(param){
        if (!param) return
        if (!param.username) return alert('请输入用户名')
        if (!param.content) return alert('请输入评论内容')
        this.state.comments.push(param);
        this.setState({
            comments:this.state.comments
        })
        this.props.saveData(this.state.comments)
    }
    handlerDeleteComment(index){
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ 
            comments:comments
        })
        this.props.saveData(this.state.comments)
    }
    render(){
        console.log(this.state.comments)
        return(
            <div className="comment-app">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList 
                comments = {this.state.comments} 
                onDeleteComment={this.handlerDeleteComment.bind(this)} />
            </div>
        )
    }
}
CommentApp.propTypes={
    data:PropTypes.any,
    saveData:PropTypes.func.isRequired
}
CommentApp = LocalStorageApp(CommentApp,'comments')
export default CommentApp;
