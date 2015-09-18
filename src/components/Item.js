import React, {Component} from 'react';
import classnames from 'classnames';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.checkItem = this.checkItem.bind(this);
    this.state = {
      done: false
    };
  }

  checkItem() {
    var currDone = this.state.done;
    this.setState({done: !currDone});
  }

  render() {
    var itemClasses = classnames(
      'Item',
      {'Item--done': this.state.done}
    );
    return (
      <div className={itemClasses}>
        <input type="checkbox" onClick={this.checkItem} />
        <span>{this.props.text}</span>
      </div>
    );
  }
}
