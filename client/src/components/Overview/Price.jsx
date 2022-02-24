import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App.jsx';
import './StylesOver.css';

const Price = () => {
  const [sale, setSale] = useState(false);
  const { productStyles } = useContext(AppContext);

  return (
    <div className="price">

      <div>
        {productStyles.sale_price &&
          <div>
            <div className="salePrice"><b>Sale: </b>${productStyles.results[0].sale_price}</div>
            <div className="originalPrice"><b>Price: </b>${productStyles.results[0].original_price}</div>
          </div>
        }
      </div>

      <div>
        {!productStyles.sale_price &&
        <div className="originalPrice"><b>Price: </b>${productStyles.results[0].original_price}</div>
        }
      </div>

    </div>
  );
}

export default Price;