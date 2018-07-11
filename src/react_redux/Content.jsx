import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ThemeSwith from "./ThemeSwith"
class Content extends Component{
    constructor(){
        super();
        this.state = { themeColor: '' }
    }
    
    componentWillMount() {
        const {store} = this.context;
        this._updateColors()
        store.subscribe(() => this._updateColors())
    }
    _updateColors(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({ themeColor: state.themeColor })
    }
    
    render(){
        return(
            <div>
                <div style={{color:this.state.themeColor}}>我是Content</div>
                <ThemeSwith />
            </div>
        )
    }
}
Content.contextTypes = {
    store:PropTypes.object
}
export default Content;