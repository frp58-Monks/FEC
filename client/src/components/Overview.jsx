import React, { useState, useEffect, useContext } from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeDropdown from './Overview/SizeDD.jsx';
import QtyDropdown from './Overview/QtyDropdown.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';

const Overview = (props) => {
  const [loading, setLoading] = useState(false);

  console.log({'Overview allProducts': props.allProducts});
  console.log({'Overview productId': props.productId});
  console.log({'Overview productDetails': props.productDetails});
  console.log({'Overview productStyles': props.productStyles});

  // Conditional Rendering - If Product Details and Product Styles states are not null then render

  // If state_name is truthy then do null otherwise do y
  // return product_id ? null : y

  return (
    <div>
      <div className="image-carousel"><ImageCarousel /></div>

      <div className="product-details">
        <div>
          <h3 className="name">name</h3>
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