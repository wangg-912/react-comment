import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ThemeSwith extends Component{
    constructor(){
        super();
        let state = {themeColor:''}
    }
    componentWillMount() {
        const { store } = this.context
        this._updateThemeSwith();
        store.subscribe(()=>this._updateThemeSwith())
    }
    _updateThemeSwith(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    changeColorHandler(color){
        const {store} = this.context;
        store.dispatch({
            type:"CHANGE_COLOR",
            themeColor:color
        })
    }
    render () {
        return (
          <div>
            <button className={this.state.themeColor=='red'?'active':''} style={{color:this.state.themeColor}} onClick={this.changeColorHandler.bind(this,'red')}>Red</button>
            <button className={this.state.themeColor=='blue'?'active':''}  style={{color:this.state.themeColor}} onClick={this.changeColorHandler.bind(this,'blue')}>Blue</button>
          </div>
        )
      }
}
ThemeSwith.contextTypes = {
    store:PropTypes.object
}
export default ThemeSwith;