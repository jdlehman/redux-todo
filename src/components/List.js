import React, {Component} from 'react';
import Item from 'components/Item';
import uuid from 'node-uuid';

export default class List extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {
      items: [
        {id: uuid.v4(), text: "Item 1"},
        {id: uuid.v4(), text: "Item 2"}
      ]
    };
  }

  createItem(text) {
    return {id: uuid.v4(), text};
  }

  addItem() {
    var input = React.findDOMNode(this.refs.newItem);
    var currItems = this.state.items;
    currItems.push(this.createItem(input.value));
    this.setState({items: currItems});
    input.value = '';
  }

  renderItems() {
    return this.state.items.map((item, index) => {
      return (
        <Item key={item.id} text={item.text} />
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
