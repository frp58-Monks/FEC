import React, { useState, useEffect, useContext } from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeDropdown from './Overview/SizeDD.jsx';
import QtyDropdown from './Overview/QtyDropdown.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';

const Overview = (props) => {
  return (
    <div>
      <div className="image-carousel"><ImageCarousel /></div>

      <div className="product-details">
        <div>
          <h2 className="name">Product Name-PROP</h2>
          <div className="favoritable"><Favoritable /></div>
        </div>

        <div className="category">Product Category-PROP</div>

        <div>
          <div className="stars">import Stars component PROP from App</div>
          <div>ratings link</div>
          <div>reviews link</div>
        </div>

        <p className="description">Product Desription-PROP</p>

        <div className="styles"><Styles /></div>

        <div className="dropdown-menus">
          <SizeDropdown sizesArr={props.sizesArr} />
          <QtyDropdown qtyArr={props.qtyArr} />
        </div>

        <div className="price"><Price /></div>

        <div className="add-to-cart"><AddToCart /></div>
      </div>

    </div>
  );
}

export default Overview;