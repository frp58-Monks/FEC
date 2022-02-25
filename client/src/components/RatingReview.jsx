import React, { useState, useEffect } from 'react';
import ReviewListItem from './RatingReview/ReviewListItem.jsx';
import axios from 'axios';
import ProgressBar from './RatingReview/ProgressBar.jsx';
import { MoreReviews, RTitle, AddReview } from './Styled/RatingReviewStyled.js';
import Modal from './RatingReview/Modal.jsx';

//takes in product_id prop from feedback
const RatingReview = ({ reviews, reviewStars, product_id, reviewFunc, setDropdown, postFunc }) => {
  const [showCount, setShowCount] = useState(2);
  const [selectedDropdown, setSelectedDropdown] = useState('relevant');
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[photos, setPhotos] = useState([]);
  const[characteristics, setCharacteristics] = useState({});
  const [form, setForm] = useState(false);

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

  //modal toggle
  const toggleModal = () => {
    setShowModal(!showModal);
  }

  if (form === true) {
    postFunc({
      "product_id": product_id,
      "rating": Number(rating),
      "summary": summary,
      "body": body,
      "recommend": recommend,
      "name": username,
      "email": email,
      "photos": photos,
      "characteristics": characteristics
    });
    setForm(false);
  };

  return (
    <div>
      <RTitle className="Rating Title"> Ratings and Reviews </RTitle>

      <div className="SortContainer">
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
                        return <option key={i} value={sortItem}>{sortItem}</option>
                      })
                    }
                  </select>
                </div>
              }
          </div>
          </div>

      <div className="Flexbox-container">

        <div className="Flexbox-item-1">

            <div className="StarAndBar">
              <div className="Progress">
                {reviewStars &&
                  <ProgressBar reviewStars={reviewStars} />
                }
              </div>
            </div>

        </div>

          <div className="Flexbox-item-2">
            <div className="RItem" >
              <div className="ReviewItem">
                {
                  resultsArr && results &&
                  results.map((item, i) => (
                    <ReviewListItem item={item} key={i} />
                  ))
                }
              </div>
            </div>

            <div className="modalContainer">
              <div className="MReviews">
                {
                  resultsArr && results &&
                    showCount <= results.length ?
                    <MoreReviews onClick={addCount}>More Reviews</MoreReviews> : 'No More Reviews'
                }
              </div>

              <div className="modalReviews">
                <AddReview className="ModalOpener" onClick={toggleModal}>
                  Add Review
                </AddReview>

                <Modal
                  show={showModal}
                  closeModal={toggleModal}
                  setRating={setRating}
                  setSummary={setSummary}
                  setBody={setBody}
                  setRecommend={setRecommend}
                  setUsername={setUsername}
                  setEmail={setEmail}
                  customClass="CustomModal"
                  setForm={setForm}
                >
                </Modal>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}

export default RatingReview;