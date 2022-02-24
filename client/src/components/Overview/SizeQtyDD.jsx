import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../App.jsx';
import { OverviewContext } from '../Overview.jsx';
import './StylesOver.css';

const SizeQtyDD = () => {
  const { defaultStyle, updateCurrentStyle } = useContext(OverviewContext);
  const { productStyles } = useContext(AppContext);

  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(null);
  const [qtyArray, setQtyArray] = useState(null);
  const generateQtyArray = (sizeParam) => {
    let max;
    let arrayOfQuantities = ['--'];
    if (productStyles) {
      let skusKeys = Object.keys(productStyles.results[0].skus);
      skusKeys.forEach((key) => {
        let eachSize = productStyles.results[0].skus[key].size;
        let eachQuantity = productStyles.results[0].skus[key].quantity;
        if (eachSize === sizeParam) {
          max = eachQuantity;
        }
      })
      if (max > 15) {
        max = 15;
      }
      let num = 1;
      while (num <= max) {
        arrayOfQuantities.push(num);
        num++;
      }
    }
    setQtyArray(arrayOfQuantities);
  }

  let arrayOfSizes = ['--'];
  if (productStyles) {
    let skusKeys = Object.keys(productStyles.results[0].skus);
    skusKeys.forEach((skuskey) => {
      let currentSize = productStyles.results[0].skus[skuskey].size;
      if (arrayOfSizes.indexOf(currentSize) === -1) {
        arrayOfSizes.push(currentSize);
      }
    })
  }

  useEffect(() => (
    generateQtyArray(size)
  ), [size]);

  return (
    <>
      {productStyles &&
      <div className="dropdownMenus">
        <div className="size-dd">
        <b>Size: </b>
          <select name="Size" id="size-DD"
          onChange={(e) => {setSize(e.target.value);}}>
          {arrayOfSizes.map((size) => {
            return <option key={size} value={size}>{size}</option>
          })}
          </select>
        </div>

        <div className="qty-dd">
          <b>Qty: </b>
          <select name="qty" id="qty-DD" onChange={(e) => {
            console.log('qty changed'); setQty(e.target.value);
          }}>
          {qtyArray && qtyArray.map((qty) => {
            return <option key={qty} value={qty}>{qty}</option>
          })}
          </select>
        </div>

      </div>
      }
    </>
  );
};

export default SizeQtyDD;