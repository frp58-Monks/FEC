import React, { useState, useEffect } from 'react';
import RatingReview from './RatingReview.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import axios from 'axios';

const Feedback = (props) => {
  const [reviews, setReviews] = useState({});
  const [questions, setQuestions] = useState({});
  const [product_id, setProduct_id] = useState(props.product_id);
  const [dropdown, setDropdown] = useState('relevant');

  if (props.product_id !== product_id) {
    setProduct_id(props.product_id);
  }

  //R&R API CALLS
  const getReviews = () => {
    axios
      .get('/reviews/', {
        params: {
          product_id: product_id,
          sort: dropdown,
          count: 1000
        }
      })
      .then(res => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log('error with reviews', err);
      });
  }

  const postReviews = (params) => {
    console.log(params);
    axios
      .post('/reviews/', params)
      .then(() => {
        getReviews();
        console.log('successful post');
      })
      .catch((err) => {
        console.log('error with posting review', err);
      });
  }

  //Q&A API CALLS
  const getQuestions = () => {
    axios
      .get('/qa/questions', { params: { product_id: product_id } })
      .then(res => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log('error with questions', err);
      });
  }

  useEffect(() => (
    getReviews(),
    getQuestions()
  ), [product_id, dropdown]);

  return (
    <div>
      <QuestionAnswer
        questions={questions}
      />
      <div className="ReviewFlexContainer">
        {props.reviewStars && reviews && product_id &&
          <RatingReview className="RRFeedbackContainer"
            reviews={reviews}
            reviewStars={props.reviewStars}
            product_id={product_id}
            reviewFunc={getReviews}
            setDropdown={setDropdown}
            postFunc={postReviews}
          />
        }
      </div>
    </div>
  )
}

export default Feedback;