import React, { Component } from 'react';
import AppLoad from "./AppLoadComponent"
class AppInput extends Component{
    constructor(){
        super()
    }
    componentDidMount (){
        if(this.props.data){
            this.input.value = this.props.data;
        }
        this.input.focus();
    }
    handlerSave(){
        let _value_ = this.input.value;
        if(this.props.onSave && _value_){
            this.props.onSave(_value_);
        }
    }
    handlerChangeDate(event){
        this.setState({
            data:event.target.value
        })
    }
    handlerReset(){
        if(this.props.onReset){
            this.props.onReset("");
            this.input.value = "";
        }
    }
    render(){
        return (
            <div>
                <input ref={(input)=>this.input=input}   />
                <br/>
                <button onClick={this.handlerSave.bind(this)}>保存</button>
                <button onClick={this.handlerReset.bind(this)}>重置</button>
            </div>
        )
    }
}
AppInput = AppLoad(AppInput,'username')
export default AppInput;