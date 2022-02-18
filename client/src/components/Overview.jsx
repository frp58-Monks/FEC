import React, { useState, useEffect, useContext } from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeQtyDD from './Overview/SizeQtyDD.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';

const Overview = (props) => {
  console.log({'stars': props.stars});
  let rdyToRender = null;
  if (props.productDetails && props.productStyles) {
    rdyToRender = true;
  }
  return (
    <div>
      {rdyToRender &&
      <div>
        <div className="image-carousel"><ImageCarousel productStyles={props.productStyles}/></div>

        <div className="product-details">
          <div>
            <h3 className="name">{props.productDetails.name}</h3>
            <div className="favoritable"><Favoritable /></div>
          </div>

          <div className="category"><b>Category: </b>{props.productDetails.category}</div>

          <div>
            <RatingBreakdown reviewStars={props.reviewStars}/>
            <div>Ratings-link</div>
            <div>Reviews-link</div>
          </div>

          <div className="description">About this Item: <p className="productDesription">{props.productDetails.description}</p></div>

          <div className="styles"><Styles productStyles={props.productStyles}/></div>

          <SizeQtyDD className="dropdown-menus" productStyles={props.productStyles}/>

          <div className="price"><Price originalPrice={props.productStyles.results[0].original_price} salePrice={props.productStyles.results[0].sale_price}/></div>

          <div className="add-to-cart"><AddToCart /></div>
        </div>
      </div>
      }
    </div>
  );
}

export default Overview;