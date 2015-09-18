import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Item from 'components/Item';
import * as TodoActions from 'actions/TodoActions';

class List extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  createItem(text) {
  }

  addItem() {
    var input = React.findDOMNode(this.refs.newItem);
    this.props.dispatch(TodoActions.add(input.value));
    input.value = '';
  }

  renderItems() {
    var boundActions = bindActionCreators(TodoActions, this.props.dispatch);
    return this.props.items.map((item, index) => {
      return (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          {...boundActions} />
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

List.propTypes = {
  dispatch: PropTypes.func
};

export default connect(state => {
  return {items: state.todos.toJS()};
})(List);
