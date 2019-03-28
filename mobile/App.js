import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { rootReducer } from 'core'
import Root from './src/components/Root'

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
