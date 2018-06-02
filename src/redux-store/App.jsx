import React, { Component } from 'react';

let appState = {
    "title":{
        "text":"我是头部",
        "color":"red"
    },
    "content":{
        "text":"我是正文1",
        color:"black"
    }
}
// function createStore (state, stateChanger){
//     const getState = ()=> state;
//     const dispatch = (action)=> stateChanger(state,action);
//     return {getState, dispatch}
// }
function stateChanger(action){
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
function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      stateChanger(state, action)
      listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
  }

class App extends Component{
    constructor(){
        super();
    }
   
   renderApp(appState){
       console.log("app loading...")
        this.renderTitle(appState.title);
        this.renderContent(appState.content);
   }
   renderTitle(opts){
        console.log("title loading...")
        this.title.innerHTML = opts.text;
        this.title.style.color = opts.color;
   }
   renderContent(opts){
        console.log("content loading...")
        this.content.innerHTML = opts.text;
        this.content.style.color = opts.color;
   }
   componentDidMount(){
       debugger;
        const store = createStore(appState, stateChanger);
        store.subscribe(() => this.renderApp(store.getState()));
        this.renderApp(store.getState());
        //this.renderApp(store.getState());
        store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
        store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) 
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
