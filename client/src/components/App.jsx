import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import Data from './Overview/hardcodedData.jsx';
<<<<<<< HEAD
import ReviewListData from './RatingReview/HardcodeData.jsx';
=======
import SearchProductBar from './SearchProd.jsx';
>>>>>>> main

//Hardcoded prop data to pass to dropdown menus
const hardcodedSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const hardcodedQuantities = ['1', '2', '10', '16', '17'];

//Updated Component to use React Hooks (instead of class component)
const App = (props) => {
  const [url, setURL] = useState(window.location.href);
  const [allData, setAllData] = useState('No Data');
  const [product_id, setProduct_id] = useState(null);
  const [productDetails, setProductDetails] = useState('No Data');
  const [productStyles, setProductStyles] = useState('No Data');

  window.addEventListener('popstate', (event) => {
    return setURL(window.loaction.href);
  })

  useEffect(() => (
    axios.get('/products')
      .then((res) => {
        setProduct_id(res.data[0].id);
        setAllData(res.data);
      })
      .catch((err) => {
        console.log('GET /products Error: ', err);
      })

  ), []);//anytime states listed in [] are changed this function would run again, otherwise everytime you render it runs

  const getProductDetails = (product_id) => {
    axios
      .get('/products/:product_id', { params: { product_id } })
      .then((res) => { setProductDetails(res.data); console.log({'Product Styles': productDetails})})
      .catch((err) => { console.log('Client GET ERR', err)
    })
  }

  const getProductStyles = (product_id) => {
    axios
      .get('/products/:product_id/styles', { params: { product_id } })
      .then((res) => { setProductStyles(res.data); console.log({'Product Styles': productStyles})})
      .catch((err) => { console.log('Client GET ERR', err)
    })
  }

  const getPoductDetailsNStyles = (product_id) => {
    getProductDetails(product_id);
    getProductStyles(product_id);
  }

  //----Console Log States Before Passing Down to Sub-Components----//
  console.log({'current url': url});
  console.log({'all products data': allData});
  console.log({'product id': product_id});
  console.log({'product details': productDetails});
  console.log({'product styles': productStyles});
  //------------Render_Here------------//
  return (
    <div className="content">
<<<<<<< HEAD
      <div>Jello World</div>
      <Overview sizesArr={hardcodedSizes} qtyArr={hardcodedQuantities} productData={Data} />
      <Feedback ratingData={ReviewListData}/>
=======
      <h1>Jello World</h1>
      <SearchProductBar/>
      <Overview sizesArr={hardcodedSizes} qtyArr={hardcodedQuantities} productData={allData} getProductInfo={getPoductDetailsNStyles} prodID={product_id} prodDetails={productDetails} prodStyles={productStyles}/>
      <Feedback />
      <StarReview />
      <ReviewList />
>>>>>>> main
    </div>
  );
}

export default App;