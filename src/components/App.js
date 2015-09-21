import React, {Component} from 'react';
import List from 'components/List';
import {Provider} from 'react-redux';
import configureStore from 'configureStore';

export default class App extends Component {
  render() {
    const storeInstance = configureStore();

    return (
      <div className="App">
        <h1>Todo List</h1>
        <Provider store={storeInstance}>
          {() => <List/>}
        </Provider>
      </div>
    );
  }
}
