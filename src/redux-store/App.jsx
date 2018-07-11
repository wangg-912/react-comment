import React, { Component } from 'react';
import {stateChanger} from "./Action"
import {createStore} from "./store"

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
        //console.log("title loading...")
        this.title.innerHTML = opts.text;
        this.title.style.color = opts.color;
   }
   renderContent(opts){
        //console.log("content loading...")
        this.content.innerHTML = opts.text;
        this.content.style.color = opts.color;
   }
   componentDidMount(){
        const store = createStore(stateChanger);
        let oldState = store.getState();
        store.subscribe(() => {
            const newState = store.getState();
            this.renderApp(newState,oldState);
            oldState = newState;
        });
        this.renderApp(store.getState());
        //this.renderApp(store.getState());
        store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '123456' }) // 修改标题文本
        store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'gold' }) 
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
