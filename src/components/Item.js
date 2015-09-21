import React, {Component} from 'react';
import classnames from 'classnames';

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.checkItem = this.checkItem.bind(this);
  }

  checkItem() {
    if (this.props.done) {
      this.props.uncheck(this.props.id);
    } else {
      this.props.check(this.props.id);
    }
  }

  render() {
    var itemClasses = classnames(
      'Item',
      {'Item--done': this.props.done}
    );
    return (
      <div className={itemClasses}>
        <input type="checkbox" onClick={this.checkItem} />
        <span>{this.props.text}</span>
      </div>
    );
  }
}
