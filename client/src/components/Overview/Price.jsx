import React from 'react';

const Price = (props) => {
  let sale = false;
  if (props.sale_price) {
    sale = true;
  }
  return (
    <div>
      <div>
      {props.salePrice &&
        <div>
          <div className="salePrice">Sale: ${props.salePrice}</div>
          <div className="originalPrice">Price: ${props.originalPrice}</div>
        </div>
      }
      </div>

      <div>
        {sale &&
        <div className="originalPrice">Price: ${props.originalPrice}</div>
        }
      </div>

    </div>
  );
}

export default Price;