import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App.jsx';
import './StylesOver.css';

const Price = () => {
  const [sale, setSale] = useState(false);
  const { productStyles } = useContext(AppContext);

  if (productStyles.results[0].sale_price) {
    setSale(true);
  }

  return (
    <div className="price">

      <div>
        {sale &&
          <div>
            <div className="salePrice">Sale: ${productStyles.results[0].sale_price}</div>
            <div className="OriginalPrice">Price: ${productStyles.results[0].original_price}</div>
          </div>
        }
      </div>

      <div>
        {!sale &&
        <div className="originalPrice">Price: ${productStyles.results[0].original_price}</div>
        }
      </div>

    </div>
  );
}

export default Price;