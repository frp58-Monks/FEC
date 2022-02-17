import React, {useState, useEffect, useContext} from 'react';

const QtyDropdown = (props) => {
  console.log({'Qty Dropdown Styles Prop': props.productStyles});
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(props.qtyArr[0]);

  return (
    <div className="qty-dd">
      Choose a Quantity:
      <select name="qty" id="qty-DD" onChange={(e) => {
        setQty(e.target.value);
      }}>
      {props.qtyArr.map((qty) => {
        return <option key={qty} value={qty}>{qty}</option>
      })}
      </select>
    </div>
  );
};

export default QtyDropdown;