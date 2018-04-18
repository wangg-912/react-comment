import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component{

    componentWillMount() {
        this._loadUserName();
    }
    _loadUserName(){
        let username = localStorage.getItem('username');
        if(username) 
        this.setState({
            username:username
        })
    }
    constructor(){
        super();
        this.state = {
            username: '',
            content: '',
            createTime:''
        }
    }
    componentDidMount(){
        this.textarea.focus();
    }
    _saveUserName(username){
        localStorage.setItem('username',username);
    }
    handleUsernameBlur(event){
        this._saveUserName(event.target.value)
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if (this.props.onSubmit) {
        const { username, content, createTime} = this.state
        this.props.onSubmit({username, content, createTime:+new Date()})
        }
        this.setState({ content: '' })
    }
    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input  value = {this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea  ref={(textarea)=>this.textarea = textarea} value = {this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                <button className="button-item" onClick = {this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}
CommentInput.propTypes = {
    onSubmit:PropTypes.func
}

export default CommentInput;
