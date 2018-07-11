import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Header from "./Header";
import Content from "./Content";
import {themeReducer} from "./Action";
import {createStore} from "./Reducer";

import "./style.less";

const store = createStore(themeReducer);

class App extends Component {
    constructor(){
      super();
    }
    getChildContext () {
        return { store }
    }
    render () {
      return (
        <div>
          <Header />
          <Content />
        </div>
      )
    }
  }
  App.childContextTypes={
    store:PropTypes.object
  }
  
  export default App;