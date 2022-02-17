import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import Data from './Overview/hardcodedData.jsx';
import SearchProductBar from './SearchProd.jsx';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';

//Hardcoded prop data to pass to dropdown menus
const hardcodedSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const hardcodedQuantities = ['1', '2', '10', '16', '17'];

//create global context
export const AppContext = React.createContext();
//Updated Component to use React Hooks (instead of class component)
const App = (props) => {
  const [url, setURL] = useState(window.location.href);
  const [allProducts, setAllProducts] = useState(null);
  const [product_id, setProduct_id] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [productStyles, setProductStyles] = useState(null);
  const [reviewStars, setReviewStars] = useState(null);
  // const [ratingAverage, setRatingAverage] = useState(0);

  // const averageSetting = {
  //   ratingAverage, setRatingAverage
  // }

  window.addEventListener('popstate', (event) => {
    return setURL(window.loaction.href);
  })

  useEffect(() => (
    axios.get('/products')
      .then((res) => {
        const product_id = res.data[0].id;
        setProduct_id(product_id);
        const allProducts = res.data;
        setAllProducts(allProducts);
      })
      .catch((err) => {
        console.log('GET /products Error: ', err);
      })
  ), []);//anytime states listed in [] are changed this function would run again, otherwise everytime you render it runs
  //Install react method: isonfocus to only useEffect once upon page load

  const getProductDetails = (product_id) => {
    axios
      .get('/products/:product_id', {
        params: { product_id }
      })
      .then((res) => {
        const prodDetailsRes = res.data;
        setProductDetails(prodDetailsRes);
      })
      .catch((err) => {
        console.log('Client GET Details err: ', err)
      })
  }

  const getProductStyles = (product_id) => {
    axios
      .get('/products/:product_id/styles', {
        params: { product_id }
      })
      .then((res) => {
        const prodStylesRes = (res.data);
        setProductStyles(prodStylesRes);
      })
      .catch((err) => { console.log('Client GET Styles err: ', err);
      })
  }

  const getReviewStars = () => {
    axios.get('/reviews/meta', { params: { product_id } })
      .then(res => {
        setReviewStars(res.data);
      })
      .catch((err) => {
        console.log('error with stars: ', err);
      })
  }

  useEffect(() => (
    getProductDetails(product_id),
    getProductStyles(product_id),
    getReviewStars(product_id)
  ), [product_id]);

  //----Console Log States Before Passing Down to Sub-Components----//
  // console.log({'current url': url});
  // console.log({'all products data': allProducts});
  // console.log({'product id': product_id});
  // console.log({'product details': productDetails});
  // console.log({'product styles': productStyles});
  //------------Render_Here------------//
  return (
    <div className="content">
      <h1>Jello World</h1>
      <div>
        {reviewStars &&
          <RatingBreakdown reviewStars={reviewStars}/>
        }
      </div>
      <SearchProductBar/>
      <Overview
        sizesArr={hardcodedSizes}
        qtyArr={hardcodedQuantities}
        allProducts={allProducts}
        productId={product_id}
        productDetails={productDetails}
        productStyles={productStyles}
      />
      <div>
        {product_id && reviewStars &&
          <Feedback
          product_id={product_id}
          reviewStars={reviewStars}
        />
        }
      </div>
    </div>
  );
}

export default App;


/*

 <AppContext.Provider value={averageSetting}>
     </AppContext.Provider>
      <div>
        {product_id && reviewStars &&
          <Feedback
          product_id={product_id}
          reviewStars={reviewsStars}
        />
        }
      </div>
      */