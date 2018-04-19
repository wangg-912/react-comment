import React, { Component } from 'react';

export default (LoadContainer,name)=>{
    class CommentContainer extends Component{
        constructor(){
            super();
            this.state = {
                data:[]
            }
        }
        componentWillMount () {
            let data = localStorage.getItem(name)
            try {
                // 尝试把它解析成 JSON 对象
                this.setState({ data: JSON.parse(data) })
            } catch (e) {
                // 如果出错了就当普通字符串读取
                this.setState({ data })
            }
        }
        saveData(data){
            try {
                localStorage.setItem(name,JSON.stringify(data));
            } catch (error) {
                localStorage.setItem(name,`${data}`); 
            }

        }
        render(){
            return(
                <LoadContainer data={this.state.data}  saveData={this.saveData.bind(this)} />
            )
        }
        
    }
    return CommentContainer;
}