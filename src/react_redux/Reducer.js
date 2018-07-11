export function createStore(reducer){//reducer是一个纯函数
    let state = null;
    const listeners  = [];
    const subscribe = (listener)=> listeners.push(listener);
    const getState = ()=>state;
    const dispatch = (action) =>{
        state  = reducer(state,action);
        listeners.forEach((listener)=>listener())
    }
    dispatch({});
    return{ getState, dispatch, subscribe}
}
