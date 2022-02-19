import React, { useState } from 'react';
import ReviewListItem from './RatingReview/ReviewListItem.jsx';
import axios from 'axios';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';
import ProgressBar from './RatingReview/ProgressBar.jsx';
//import { TotalContainer} from './Styled/ProgressBarStyled.js';
import { MoreReviews } from './styled/RatingReviewStyled.js';
import Flexbos from './styled/Flexbox.js';


//takes in product_id prop from feedback
const RatingReview = ({ reviews, reviewStars, product_id, reviewFunc, setDropdown }) => {
  const [showCount, setShowCount] = useState(2);
  const [selectedDropdown, setSelectedDropdown] = useState('relevant');

  //limit/add review tiles to view
  const addCount = (event) => {
    event.preventDefault();
    setShowCount(showCount + 2);
  }

  //wait for resultsArr
  let resultsArr = reviews.results;
  let results;
  if (resultsArr) {
    results = resultsArr.slice(0, showCount);
  }

  //sort/filter reviews
  const onChange = (e) => {
    setSelectedDropdown(e.target.value);
    setDropdown(e.target.value);
  }

  return (
    <div className="RatingReviewContainer">
      
      <div className='StarandBarContainer'>
      <div className="AverageStars">
        {reviewStars &&
          <RatingBreakdown reviewStars={reviewStars} />
        }
      </div>

      <div className="ProgressBar">
        {reviewStars &&
          <ProgressBar reviewStars={reviewStars} />
        }
      </div>
      </div>

      <div className="Dropdown">
        {selectedDropdown && onChange &&
          <div className="sortReview">
            Sort:
            <select name="Sort" id="reviews"
              onChange={onChange}
            >
              {
                selectedDropdown && onChange &&
                ['relevant', 'helpful', 'newest'].map((sortItem, i) => {
                  return <option key='review' value={sortItem}>{sortItem}</option>
                })
              }
            </select>
          </div>
        }
      </div>

        <div className="ReviewItem">
          {
            resultsArr && results &&
            results.map((item, i) => (
              <ReviewListItem item={item} key={i} product_id={product_id} reviewStars={reviewStars} reviews={reviews} />
            ))
          }
        </div>

        <div className="MoreReviews">
          {
            resultsArr && results &&
              showCount <= results.length ?
              <button onClick={addCount}>More Reviews</button> : ''
          }
        </div>
    </div>
  )
}

export default RatingReview;

// !resultsArr ? null :

/*

<div>sort dropdown here</div>
      <div>
        {selectedDropdown &&
          <div className="sortReview">
            Sort:
            <select name="Sort" id="reviews"
              onChange={onChange}
            >
              {
                sortArray && selectedDropdown &&
                sortArray.map((sortItem, i) => {
                  return <option key='review' value={selectedDropdown}>{sortItem}</option>
                })
              }
            </select>
          </div>
        }
      </div>


  return (
    <div>
      <RatingBreakdown reviewStars={reviewStars} />
      <div>
        {reviewStars &&
          <ProgressBar reviewStars={reviewStars} />
        }
      </div>
      <div>
        {
          resultsArr &&
          resultsArr.map((item, i) => (
            <ReviewListItem item={item} key={i} product_id={product_id} reviewStars={reviewStars} reviews={reviews} />
          ))
        }
      </div>
    </div>
  )
}

          {
            sortArray &&
            sortArray.map((sortItem, i) => {
              return <option key='i' value='sorted'>{sortItem}</option>
            })
          }
*/