import React from 'react';

const Price = (props) => {
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

      <div>Price: ${props.originalPrice}</div>
    </div>
  );
}

export default Price;