import React,{ Component } from 'react';

export default class List extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div>姓名：{this.props.user.username}</div>
                <div>年龄：{this.props.user.age}</div>
                <div>性别：{this.props.user.gender}</div>
                <hr />
            </div>
        )
    }
}
