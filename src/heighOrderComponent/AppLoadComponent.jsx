import React, { Component } from 'react';

export default (AppInputComponent,name) =>{//TODO该函数为匿名高阶函数，可以再被引用的页面任意命名
    class AppLoadComponent extends Component{
        constructor(){
            super();
            this.state = {
                data:"" 
            }
        }
        componentWillMount () {
            let _data = localStorage.getItem('data');
            //if(_data){
                this.setState({data:_data});
            //}
        }
        handlerSaveData(_name_){
            if(_name_){
                this.setState={
                    data:_name_
                }
                localStorage.setItem('data',_name_)
            }
        }
        handlerSaveData(value){
            this.setState={
                data:value
            }
            localStorage.setItem('data',value)
        }
        render(){
            return(
                <AppInputComponent onSave={this.handlerSaveData.bind(this)} data={this.state.data} onReset={this.handlerSaveData.bind(this)} />
            )
        }
    }
    return AppLoadComponent;
}