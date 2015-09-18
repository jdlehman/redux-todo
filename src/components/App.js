import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from 'configureStore';
import List from 'components/List';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Provider store={store}>
          {() => <List />}
        </Provider>
      </div>
    );
  }
}
