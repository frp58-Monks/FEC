import React, { useState } from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import StarReview from './RatingReview/StarReview.jsx';
import StarFilled from './RatingReview/StarFilled.jsx';
import ReviewList from './RatingReview/ReviewList.jsx';
import Data from './Overview/hardcodedData.jsx';

//Hardcoded prop data to pass to dropdown menus
const hardcodedSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const hardcodedQuantities = ['1', '2', '10', '16', '17'];

// componentDidMount() {
//   this.getProducts('products');
// }

//Updated Component to use React Hooks (instead of class component)
const App = (props) => {

  //Create a func to set the state of 'url' to the current URL of the window everytime it changes
  const [url, setURL] = useState(window.location.href);
  window.addEventListener('popstate', function (event) {
    return setURL(window.loaction.href);
  })

  //------------Render_Here------------//
  return (
    <div className="content">
      <div>Jello World</div>
      <Overview sizesArr={hardcodedSizes} qtyArr={hardcodedQuantities} productData={Data} url={url} />
      <Feedback />
      <StarReview />
      <ReviewList />
    </div>
  );
}

export default App;
