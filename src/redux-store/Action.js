export function stateChanger(state,action){
    if(!state){
        return {
            "title":{
                "text":"我是头部",
                "color":"red"
            },
            "content":{
                "text":"我是正文",
                color:"black"
            }
        }
    }
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
        return state;
    }
}