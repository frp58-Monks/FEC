import React, { useState, useEffect } from 'react';
import RatingReview from './RatingReview.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import StarReview from './RatingReview/StarReview.jsx';
import axios from 'axios';

//takes in product id from app (overview)
class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: {},
      questions: {}
    };
    this.getReviews = this.getReviews.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    // this.getSortedReviews = this.getSortedReviews.bind(this);
  }
  //R&R API CALLS
  //get data for individual review tiles
  getReviews(prodId, selectedDropdown) {
    console.log('selected drop', selectedDropdown);
    let product_id = this.props.product_id;

    axios
      .get('/reviews/', {
        params: {
          product_id: product_id,
          sort: selectedDropdown
        }
      })
      .then(res => {
        const data = res.data;

        this.setState({
          reviews: data,
        });
      })
      .catch((err) => {
        console.log('error with reviews', err);
      });
  }

  // review sort - takes in dropdown selection from RatingReview
  // getSortedReviews(productId, selectedDropdown) {
  //   axios
  //     .get('/reviews/', { params: { product_id: productId, sort: selectedDropdown } })
  //     .then(res => {
  //       const data = res.data;

  //       this.setState({
  //         reviews: data
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('error with reviews', err);
  //     });
  // }
  //Q&A API CALLS

  getQuestions() {
    // const product_id = this.props.product_id;
    const product_id = 40345
    axios
      .get('/qa/questions', {
        params: {
          product_id: product_id
        }
      })
      .then(res => {
        const data = res.data;
        this.setState({
          questions: data
        });
      })
      .catch((err) => {
        console.log('error with questions', err);
      });
  }

  //component did mount
  componentDidMount() {
    this.getReviews();
    this.getQuestions();
  }

  render() {
    //console.log('review star in feedback', this.props.reviewStars);
    return (
      <div>
        <QuestionAnswer questions={this.state.questions} />
        <StarReview />
        <div>
          {this.props.reviewStars && this.props.product_id && this.state.reviews &&
            <RatingReview
              reviews={this.state.reviews}
              reviewStars={this.props.reviewStars}
              product_id={this.props.product_id}
              reviewFunc={this.getReviews}
              // getSortedReviews={this.getSortedReviews}
            />
          }
        </div>
      </div>
    )
  }
}

export default Feedback;
