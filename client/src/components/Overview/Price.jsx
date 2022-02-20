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
            <div className="salePrice"><b>Sale: </b>${productStyles.results[0].sale_price}</div>
            <div className="OriginalPrice"><b>Price: </b>${productStyles.results[0].original_price}</div>
          </div>
        }
      </div>

      <div>
        {!sale &&
        <div className="originalPrice"><b>Price: </b>${productStyles.results[0].original_price}</div>
        }
      </div>

    </div>
  );
}

export default Price;