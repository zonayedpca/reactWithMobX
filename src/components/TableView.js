import React from 'react';
import { observer } from 'mobx-react';

import TableList from './TableList';

let TableView = ({ store }) => (
  <table>
    <tbody>
      <tr>
        <th>Item Name</th>
        <th>Price</th>
      </tr>
      {store.item.map((item, index) => <TableList key={index} item={item.name} price={item.price} />)}
      <tr>
        <td>Total</td>
        <td>{store.totalSum}</td>
      </tr>
    </tbody>
  </table>
)

TableView = observer(TableView);

export default TableView;
