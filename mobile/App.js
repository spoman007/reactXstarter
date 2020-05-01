import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import React, { Component } from 'react';
import { rootReducer } from 'core'
import Root from './src/components/Root'

const store = configureStore({
  reducer: rootReducer,
});
export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
