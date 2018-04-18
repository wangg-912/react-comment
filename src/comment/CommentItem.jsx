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
    render(){
        return(
            <div className="comment-item">
                <div className="comment-item-left">
                    <span className="item-name">{this.props.user.username}:</span>
                    <span className="item-content">{this.props.user.content}</span>
                </div>
               <div className="comment-item-right">{this.state.timeString}</div>
            </div>
        )
    }
}
CommentItem.propTypes={
    user:PropTypes.object.isRequired
}

export default  CommentItem;
