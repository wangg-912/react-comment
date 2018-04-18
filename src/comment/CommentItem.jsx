import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentItem extends Component{
    constructor() {
        super();
        this.state = { timeString: '' }
    }
    componentWillMount() {
      this._updateTime();
    }
    _updateTime(){
        if(this.props.user.createTime){
            const duration = (+Date.now() - this.props.user.createTime) / 1000;
            this.setState({
                timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
              })
        }else{
            this.setState({
                timeString:"暂无"
            })
        }
    }
    handerCommentDelete(){
         if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.key)
         }
    }
    render(){
        return(
            <div className="comment-item">
                <div className="comment-item-left">
                    <span className="item-name">{this.props.user.username}:</span>
                    <span className="item-content">{this.props.user.content}</span>
                </div>
               <div className="comment-item-right">
                    <span style={{paddingRight:'10px'}}>{this.state.timeString}</span>
                    <span>
                        <button onClick={this.handerCommentDelete.bind(this)} style={{display:"block",float:'right'}}>删除</button>
                    </span>
               </div>
            </div>
        )
    }
}
CommentItem.propTypes={
    user:PropTypes.object.isRequired
}

export default  CommentItem;
