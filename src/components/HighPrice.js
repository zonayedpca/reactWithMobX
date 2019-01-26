import React from 'react';
import { observer } from 'mobx-react';

let HighPrice = ({ store: { getHighValue } }) => (
  getHighValue && <div className="high-price">
    <p>Max Price: Your item {getHighValue.name} costs {getHighValue.price}</p>
  </div>
)

HighPrice = observer(HighPrice);

export default HighPrice;
