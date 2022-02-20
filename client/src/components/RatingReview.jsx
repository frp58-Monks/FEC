import React, { useState } from 'react';
import ReviewListItem from './RatingReview/ReviewListItem.jsx';
import axios from 'axios';
import RatingBreakdown from './RatingReview/RatingBreakdown.jsx';
import ProgressBar from './RatingReview/ProgressBar.jsx';
//import { TotalContainer} from './Styled/ProgressBarStyled.js';
import { MoreReviews, RTitle } from './styled/RatingReviewStyled.js';


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
    <div>
      <RTitle className="Rating Title"> Ratings and Reviews </RTitle>
      <div className="Flexbox-container">

        <div className="Flexbox-item">
            <div className="AverageStars">
              {reviewStars &&
                <RatingBreakdown reviewStars={reviewStars} />
              }
            </div>

            <div className="StarAndBar">
            <div className="Progress">
              {reviewStars &&
                <ProgressBar reviewStars={reviewStars} />
              }
            </div>
            </div>
        </div>

        <div className="Flexbox-item">
            <div className="Dropdown">
              {selectedDropdown && onChange &&
                <div className="sortReview" color='grey'>
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

            <div className="RItem">
              <div className="ReviewItem">
                {
                  resultsArr && results &&
                  results.map((item, i) => (
                    <ReviewListItem item={item} key={i} product_id={product_id} reviewStars={reviewStars} reviews={reviews} />
                  ))
                }
              </div>
            </div>

            <div className="MReviews">
              {
                resultsArr && results &&
                  showCount <= results.length ?
                  <MoreReviews onClick={addCount}>More Reviews</MoreReviews> : ''
              }
            </div>
          </div>
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