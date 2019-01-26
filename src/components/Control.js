import React, { Component } from 'react';

class Control extends Component {
  handleAddItem = () => {
    const item = { name: null, price: 0};
    let price;
    do {
      item.name = prompt('Item name:');
      price = prompt('Price:');
      item.price = price.length > 0 ? parseInt(price) : 0;
    } while(!item.name.length);
    this.props.store.addNewItem(item);
  }

  handleClearItem = () => {
    this.props.store.clearList();
  }

  render() {
    return (
      <div className="control">
        <button className="btn-add" onClick={this.handleAddItem}>Add New Item</button>
        <button className="btn-clear" onClick={this.handleClearItem}>Clear Item List</button>
      </div>
    )
  }
}

export default Control;
