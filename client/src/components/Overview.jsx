import React, {useState, useEffect, useContext} from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeDropdown from './Overview/SizeDD.jsx';
import QtyDropdown from './Overview/QtyDropdown.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';

const Overview = (props) => {
  console.log('inside overview.jsx: ', props.url);
  return (
    <div>
      <div className="image-carousel"><ImageCarousel/></div>

      <div className="product-details">
        <div>
          <h2 className="name">Product Name</h2>
          <div className="favoritable"><Favoritable/></div>
        </div>

        <div className="category">Product Category</div>

        <div>
          <div className="stars">import Stars from App</div>
          <div>ratings route</div>
          <div>reviews route</div>
        </div>

        <textarea className="description">Product Desription</textarea>

        <div className="styles"><Styles/></div>

        <div className="dropdown-menus">
          <SizeDropdown sizesArr={props.sizesArr}/>
          <QtyDropdown qtyArr={props.qtyArr}/>
        </div>

        <div className="price"><Price/></div>

        <div className="add-to-cart"><AddToCart/></div>
      </div>

    </div>
  );
}

export default Overview;