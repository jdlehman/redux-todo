import React, {Component} from 'react';
import Item from 'components/Item';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TodoActions from 'actions/TodoActions';

class List extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    var input = React.findDOMNode(this.refs.newItem);
    var text = input.value;
    var action = TodoActions.add(text);
    this.props.dispatch(action);
    input.value = '';
  }

  renderItems() {
    const boundActions = bindActionCreators(TodoActions, this.props.dispatch);
    return this.props.items.map((item, index) => {
      return (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          check={boundActions.check}
          uncheck={boundActions.uncheck} />
      );
    });
  }

  render() {
    return (
      <div className="List">
        {this.renderItems()}
        <input ref="newItem" type="text" />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

const connectFunc = connect(state => {
  return {items: state.todos.toJS()}
});

const NewList = connectFunc(List);

export default NewList;
