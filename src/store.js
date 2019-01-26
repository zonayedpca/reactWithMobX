import { decorate, observable, action, computed, configure } from 'mobx';

configure({ enforceActions: 'never' })

class Store {
  item = [{
    name: 'Coca-cola',
    price: 90
  }, {
    name: 'Oreo Biscuit',
    price: 10
  }, {
    name: 'Shakes',
    price: 900
  }];

  addNewItem(item) {
    this.item.push(item);
  }

  clearList() {
    this.item = [];
  }

  get totalSum() {
    return this.item.reduce((total, item) => total += item.price, 0);
  }

  get getHighValue() {
    let max = 0;
    let item = null;
    this.item.forEach(oneItem => {
      if(oneItem.price > max) {
        max = oneItem.price;
        item = oneItem;
      }
    })
    return item;
  }
}

decorate(Store, {
  item: observable,
  addNewItem: action,
  clearList: action,
  totalSum: computed,
  getHighValue: computed
})

const store = new Store();

export default store;
