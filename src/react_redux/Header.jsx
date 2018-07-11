import React, { Component } from 'react';
import PropTypes from 'prop-types'

 class Header extends Component{
    constructor(){
        super()
        let state = { themeColor: '' }
    }
    componentWillMount () {
        const {store} = this.context;
        this._updateThemeColor();
        store.subscribe(() => this._updateThemeColor())
    }
    _updateThemeColor(){
        const { store } = this.context;
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
    }
    render(){
        return(
            <div style={{color:this.state.themeColor}}>我是Header</div>
        )
    }
}
Header.contextTypes = {
    store:PropTypes.object
}
export default Header;