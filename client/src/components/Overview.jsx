import React, { useState, useEffect, useContext } from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeQtyDD from './Overview/SizeQtyDD.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';

const Overview = (props) => {
  // const [loading, setLoading] = useState(false);

  // console.log({'Overview productId': props.productId});
  // console.log({'Overview allProducts': props.allProducts});
  // console.log({'Overview productDetails': props.productDetails});
  // console.log({'Overview productStyles': props.productStyles});

  // Conditional Rendering - If Product Details and Product Styles states are not null then render
  // If state_name is truthy then do null otherwise do y
  // return product_id ? null : y
  let rdyToRender = null;
  if (props.productDetails && props.productStyles) {
    rdyToRender = true;
    // console.log({'The DOM is ready to render: ': rdyToRender});
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
            <div className="stars">import Stars PROP from App</div>
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