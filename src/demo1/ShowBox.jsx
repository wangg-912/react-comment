import React,{ Component} from 'react';
import List from "./List";

export default class ShowBox extends Component{
    constructor(){
        super();
    }
    render(){
        const users = [
            { username: 'Jerry', age: 21, gender: 'male' },
            { username: 'Tomy', age: 22, gender: 'male' },
            { username: 'Lily', age: 19, gender: 'female' },
            { username: 'Lucy', age: 20, gender: 'female' }
          ]
        return(
            <div className="show-box">
                {users.map((user,i)=><List key={i} user={user} />)}
            </div>
        )
    }
}