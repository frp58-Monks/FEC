import React, { useState } from 'react';
import './StylesOver.css';

const Price = (props) => {
  const [sale, setSale] = useState(false);

  if (props.sale_price) {
    setSale(true);
  }

  return (
    <div className="price">

      <div>
      {sale &&
        <div>
          <div className="salePrice">Sale: ${props.salePrice}</div>
          <div className="OriginalPrice">Price: ${props.originalPrice}</div>
        </div>
      }
      </div>

      <div>
        {!sale &&
        <div className="originalPrice">Price: ${props.originalPrice}</div>
        }
      </div>

    </div>
  );
}

export default Price;