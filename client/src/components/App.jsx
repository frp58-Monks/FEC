import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import SearchProductBar from './SearchProd.jsx';
import './style.css';

//create global context
export const AppContext = createContext();

const App = (props) => {
  const [product_id, setProduct_id] = useState(40346);
  const [productDetails, setProductDetails] = useState(null);
  const [productStyles, setProductStyles] = useState(null);
  const [index, setIndex] = useState(2);
  const [reviewStars, setReviewStars] = useState('');

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
      // console.log('GET ALL products Error: ', err);
    })
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
        // console.log('Client GET Details err: ', err)
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
      .catch((err) => { /*console.log('Client GET Styles err: ', err);*/
      })
  }

  const getReviewStars = (product_id) => {
    axios.get('/reviews/meta', { params: { product_id } })
      .then(res => {
        const starData = res.data;
        setReviewStars(starData);
      })
      .catch((err) => {
        // console.log('error with stars: ', err);
      })
  }

  useEffect(() => (
    getProductDetails(product_id),
    getProductStyles(product_id),
    getReviewStars(product_id)
  ), [product_id]);

  return (
    <AppContext.Provider value={{ productStyles, reviewStars, productDetails }}>
      <div className="content">

        <SearchProductBar className="search" searchForProducts={searchForProducts}/>

        <div>
          {productStyles &&
          <Overview/>
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
    </AppContext.Provider>
  );
}

export default App;