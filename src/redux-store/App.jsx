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
// function createStore (state, stateChanger){
//     const getState = ()=> state;
//     const dispatch = (action)=> stateChanger(state,action);
//     return {getState, dispatch}
// }
function stateChanger(state,action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            return{
                ...state,
                title: {
                ...state.title,
                text: action.text
                }
            }
      case 'UPDATE_TITLE_COLOR':
            return{
                ...state,
                title: {
                ...state.title,
                color: action.color
                }
            }
        case 'UPDATE_CONTENT_TEXT':
            return{
                ...state,
                content: {
                ...state.content,
                text: action.text
                }
            }
      case 'UPDATE_CONTENT_COLOR':
            return{
                ...state,
                content: {
                ...state.content,
                text: action.color
                }
            }
      default:
        break;
    }
}
function createStore (state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = stateChanger(state, action) // 覆盖原对象
      listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
  }

class App extends Component{
    constructor(){
        super();
    }
   renderApp(appState, oldState={}){
       if(appState === oldState) return
       //console.log("app loading...")
        this.renderTitle(appState.title);
        this.renderContent(appState.content);
   }
   renderTitle(opts){
        console.log("title loading...")
        this.title.innerHTML = opts.text;
        this.title.style.color = opts.color;
   }
   renderContent(opts){
        //console.log("content loading...")
        this.content.innerHTML = opts.text;
        this.content.style.color = opts.color;
   }
   componentDidMount(){
        const store = createStore(appState, stateChanger);
        let oldState = store.getState();
        store.subscribe(() => {
            const newState = store.getState();
            this.renderApp(newState,oldState);
            oldState = newState;
        });
        this.renderApp(store.getState());
        //this.renderApp(store.getState());
        store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '123456' }) // 修改标题文本
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
