import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import SearchProductBar from './SearchProd.jsx';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';

//create global context
export const AppContext = React.createContext();

const App = (props) => {
  // const [url, setURL] = useState(window.location.href);
  const [product_id, setProduct_id] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const [productStyles, setProductStyles] = useState(null);
  const [index, setIndex] = useState(0);
  const [reviewStars, setReviewStars] = useState(null);

  // window.addEventListener('popstate', (event) => {
  //   return setURL(window.loaction.href);
  // })

  const searchForProducts = (count, search) => {
    axios.get('/products', { params: { count }})
    .then((res) => {
      const allTheProducts = res.data;
      allTheProducts.map((eachProd) => {
        if (eachProd.name.toLowerCase() === search) {
          setProduct_id(eachProd.id);
        }
      })
    })
    .catch((err) => {
      console.log('GET ALL products Error: ', err);
    })
  }

  const featureNextProduct = () => {
    let newIndex = index + 1;
    setIndex(newIndex);
  }

  useEffect(() => (
    axios.get('/products')
    .then((res) => {
      const product_id = res.data[index].id;
      setProduct_id(product_id);
    })
    .catch((err) => {
      console.log('GET /products Error: ', err);
    })
  ), []);

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

  const getReviewStars = (product_id) => {
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

  return (
    <div className="content">
      <h1>Jello World</h1>
      <div>
        {reviewStars &&
        <RatingBreakdown reviewStars={reviewStars}/>
        }
      </div>
      <SearchProductBar searchForProducts={searchForProducts}/>
      <div>
        {productStyles &&
        <Overview
          productDetails={productDetails}
          productStyles={productStyles}
        />
        }
      </div>
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

  // const [ratingAverage, setRatingAverage] = useState(0);

  // const averageSetting = {
  //   ratingAverage, setRatingAverage
  // }

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