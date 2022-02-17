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
      reviews:{}
    };
    this.getReviews = this.getReviews.bind(this);
  }

  //R&R API CALLS
  getReviews() {
    let product_id = 40344;
    axios
      .get('/reviews/', { params: { product_id } })
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

  //Q&A API CALLS

  //component did mount
  componentDidMount() {
    this.getReviews();
  }

  render() {
    return (
      <div>
        {/* <QuestionAnswer /> */}
        <StarReview />
        <RatingReview reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default Feedback;

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