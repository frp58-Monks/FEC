import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App.jsx';
import './StylesOver.css';

const Price = () => {
  // const [sale, setSale] = useState(false);
  const { productStyles } = useContext(AppContext);

  const sale = productStyles.results[0].sale_price || false;

  return (
    <div className="price">

      {sale ?

        <div className="subPrice">
          <div className="originalPrice" style={{'text-decoration': 'line-through'}}>
            Price: ${productStyles.results[0].original_price}
          </div>
          <div className="salePrice">
            Sale: ${productStyles.results[0].sale_price}
          </div>
        </div>

        :

        <div
          className="originalPrice">
          <b>Price: </b>${productStyles.results[0].original_price}
        </div>

      }
    </div>
  );
}

export default Price;