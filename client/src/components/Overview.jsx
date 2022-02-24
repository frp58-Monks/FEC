import React, { useState, useEffect, useContext, createContext } from 'react';
import ImageCarousel from './Overview/ImageCarousel.jsx';
import Favoritable from './Overview/Favoritable.jsx';
import Styles from './Overview/Styles.jsx';
import SizeQtyDD from './Overview/SizeQtyDD.jsx';
import Price from './Overview/Price.jsx';
import AddToCart from './Overview/AddtoCart.jsx';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';
import Description from './Overview/Descript.jsx';
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

  useEffect(() => {
    setDefaultStyle(productStyles.results[0]);
  }, [productStyles]);

  return (
    <OverviewContext.Provider value={{ updateCurrentStyle, defaultStyle }}>
      {productStyles && productDetails &&
      <div className="overviewMain">

        <ImageCarousel className="imageCarouselOver"/>

        <div className="product-details">

          <h2><b>{productDetails.name}</b></h2>

          <div className="category"><b>Category: </b>{productDetails.category}</div>

          <div className="starsNlinks">
            <RatingBreakdown className="myStars" reviewStars={reviewStars}/>
            <div className="myRatings" onClick={(e) => console.log('clicked on ratings route')}><u>1902 ratings</u></div>
            <div className="myQuestions" onClick={(e) => console.log('clicked on questions route')}>| <u>85 answered questions</u></div>
          </div>

          <Description/>

          <Styles/>

          <div className="dropdownsCart">
            <SizeQtyDD/>
            <AddToCart/>
          </div>

          <Price/>

        </div>
      </div>
      }
    </OverviewContext.Provider>
  );
}

export default Overview;