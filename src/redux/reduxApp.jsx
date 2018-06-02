import React, { Component } from 'react';
let appState = {
    "title":{
        "text":"我是头部",
        "color":"red"
    },
    "content":{
        "text":"我是正文",
        color:"black"
    }
}
class App extends Component{
    // 管理状态变更的操作
    dispatch(action){
        switch(action.type){
            case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break;
          case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break;
            case 'UPDATE_CONTENT_TEXT':
            appState.content.text = action.text
            break;
          case 'UPDATE_CONTENT_COLOR':
            appState.content.color = action.color
            break;
          default:
            break;
        }
    }
    // 渲染头部
    renderTitle(opts){
        this.title.innerHTML = opts.text;
        this.title.style.color = opts.color;
    }
    // 渲染中间部分
    renderContainer(opts){
        this.content.innerHTML = opts.text;
        this.content.style.color = opts.color;
    }
    // 渲染入口
    renderApp(appState){
        this.renderTitle(appState.title);
        this.renderContainer(appState.content);
    }
    // 组件加载完毕
    componentDidMount() {
        this.renderApp(appState);
        
    }
    componentDidUpdate(){
        this.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '更改后的头部！' }) // 修改标题文本
        this.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色

        this.dispatch({ type: 'UPDATE_CONTENT_TEXT', text: '更改后的身体！' }) // 修改主体文本
        this.dispatch({ type: 'UPDATE_CONTENT_COLOR', color: 'red' }) // 修改主体颜色
        this.renderApp(appState); // 把新的数据渲染到页面上
    }
    render(){
        return(
            <div>
                <div ref={(title)=>this.title = title}></div>
                <div ref={(content)=>this.content = content}></div>
            </div>
        )
    }
}

export default App;