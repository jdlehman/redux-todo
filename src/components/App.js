import React, {Component} from 'react';
import List from 'components/List';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <List/>
      </div>
    );
  }
}
