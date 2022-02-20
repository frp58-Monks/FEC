import React from 'react';
import './StylesOver.css';

const AddToCart = () => {
  return (
    <form onSubmit={(e) => {e.preventDefault(); console.log('You clicked AddToCart');}}>
      <button
        className="addToCart"
        type="submit">
        Add To Cart
      </button>
    </form>
  );
}

export default AddToCart;