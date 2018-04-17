import React, { Component } from 'react';

export default class AppClock extends Component{
    constructor(){
        super()
        this.state = {
            date:new Date()
        }
    }
    componentWillMount() {
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }
}