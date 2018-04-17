import React, { Component } from 'react';
import ShowBox from "./ShowBox";

class LikeButton extends Component {
  
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({//每次触发会自动调用组件更新的操作。
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return (
      <div>
        <button variant="raised" color="primary" onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? this.props.show : this.props.hide} 👍
        </button>
        <br />
        <div>{this.state.isLiked? <ShowBox /> : ""}</div>
        </div>
    )
  }
}
LikeButton.defaultProps={
  "hide":"点赞",
  "show":"取消"
}
export default LikeButton;