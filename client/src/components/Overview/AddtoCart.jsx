import React from 'react';

const AddToCart = (props) => {
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); console.log('You clicked AddToCart');}}>
        <button
          type="submit">
          Add To Cart
        </button>
      </form>
    </div>
  );
}

export default AddToCart;