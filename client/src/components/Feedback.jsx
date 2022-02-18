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
      reviews:{},
      reviewMeta: {}
    };
    this.getReviews = this.getReviews.bind(this);
    this.getMeta = this.getMeta.bind(this);
  }
  //R&R API CALLS
  //get data for individual review tiles
  getReviews() {
    let product_id = this.props.product_id;
    axios
      .get('/reviews/', { params: { product_id: product_id } })
      .then(res => {
        const data = res.data;

        this.setState({
          reviews: data
        });
      })
      .catch((err) => {
        console.log('error with reviews', err);
      });
  }

  //get review meta
  getMeta() {
    let product_id = this.props.product_id;
    axios
      .get('/reviews/meta', { params: { product_id: product_id } })
      .then(res => {
        const data = res.data;

        this.setState({
          reviewMeta: data
        });
      })
      .catch((err) => {
        console.log('error with reviews', err);
      });
  }

  //Put review req

  //Q&A API CALLS

  //component did mount
  componentDidMount() {
    this.getReviews();
    this.getMeta();
  }

  render() {
    //console.log('review star in feedback', this.props.reviewStars);
    return (
      <div>
        <QuestionAnswer />
        <StarReview />
        <div>
        <RatingReview
          reviews={this.state.reviews}
          reviewStars={this.props.reviewStars}
          meta={this.state.reviewMeta}
          product_id={this.props.product_id}
        />
        </div>
      </div>
    )
  }
}

export default Feedback;

/* META
 //get for progress bars
  getMeta() {
    let product_id = this.props.product_id;
    axios
      .get('/reviews/meta', { params: { product_id: product_id } })
      .then(res => {
        const data = res.data;

        this.setState({
          reviewMeta: data
        });
      })
      .catch((err) => {
        console.log('error with reviews', err);
      });
  }

/*POTENTIAL HOOK REFACTOR

// //takes in product_id prop from app (overview)
// const Feedback = (props) => {
//   //use React Hooks to set state
//   const [reviews, setReviews] = useState([]);
//   // //Rating and Reviews get all
//   // const getReviews = (product_id) => {

//     useEffect(() => {
//       const product_id = 40344;
//       console.log('use Effect Running');

//       axios.get('/reviews/', { params: { product_id } })
//         .then(res => {
//           setReviews(res.data);;
//         })
//         .catch((err) => {
//           console.log('Client GET ERR', err);
//         })
//     }, [])

//   return (
//     <div>
//       <QuestionAnswer />
//       <StarReview />
//       <RatingReview reviews={reviews}/>
//     </div>
//   )
// }

*/
//<RatingReview ratingData={ratingData}/>