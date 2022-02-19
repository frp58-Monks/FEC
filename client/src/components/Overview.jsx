import React, { useState, useEffect, useContext, createContext } from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeQtyDD from './Overview/SizeQtyDD.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';
import './Overview/StylesOver.css';
import { AppContext } from './App.jsx';

export const OverviewContext = createContext();


const Overview = () => {
  const { productStyles, productDetails, reviewStars } = useContext(AppContext);
  const [defaultStyle, setDefaultStyle] = useState(productStyles.results[0]);

  const updateCurrentStyle = (e) => {
    let value = parseInt(e.target.attributes.value.value);
    productStyles.results.forEach((everyStyle) => {
      if (everyStyle.style_id === value) {
        setDefaultStyle(everyStyle);
      }
    })
  };

  let rdyToRender = null;
  if (productDetails && productStyles) {
    rdyToRender = true;
  }

  return (
    <OverviewContext.Provider value={{ updateCurrentStyle, defaultStyle }}>
    <div>
      {rdyToRender &&
      <div className="overviewMain">
        <div className="image-carousel">
          <ImageCarousel/>
        </div>

        <div className="product-details">

          <h3>{productDetails.name}</h3>

          <div className="category"><b>Category: </b>{productDetails.category}</div>

          <div>
            <RatingBreakdown reviewStars={reviewStars}/>
            <div>Ratings-link</div>
            <div>Reviews-link</div>
          </div>

          <div>About this Item: <p className="productDesription">{productDetails.description}</p></div>

          <div className="styles"><Styles/></div>

          <div className="dropdownsCart">
            <SizeQtyDD productStyles={productStyles}/>
            <div><AddToCart /></div>
          </div>

          <div><Price originalPrice={productStyles.results[0].original_price} salePrice={productStyles.results[0].sale_price}/></div>

        </div>
      </div>
      }
    </div>
    </OverviewContext.Provider>
  );
}

export default Overview;