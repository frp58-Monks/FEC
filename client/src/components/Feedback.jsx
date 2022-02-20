import React, { useState, useEffect } from 'react';
import RatingReview from './RatingReview.jsx';
import QuestionAnswer from './QuestionAnswer.jsx';
import StarReview from './RatingReview/StarReview.jsx';
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
      <StarReview />
      <div>
        {props.reviewStars && reviews && product_id &&
          <RatingReview
            reviews={reviews}
            reviewStars={props.reviewStars}
            product_id={product_id}
            reviewFunc={getReviews}
            setDropdown={setDropdown}
          />
        }
      </div>
    </div>
  )
}

export default Feedback;

// //takes in product id from app (overview)
// class Feedback extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reviews:{},
//       questions: {},
//       reviewMeta: {}
//     };
//     this.getReviews = this.getReviews.bind(this);
//     this.getMeta = this.getMeta.bind(this);
//     this.getQuestions = this.getQuestions.bind(this);
//   }
//   //R&R API CALLS
//   //get data for individual review tiles
//   getReviews() {
//     let product_id = this.props.product_id;
//     axios
//       .get('/reviews/', { params: { product_id: product_id } })
//       .then(res => {
//         const data = res.data;

//         this.setState({
//           reviews: data
//         });
//       })
//       .catch((err) => {
//         console.log('error with reviews', err);
//       });
//   }

//   //get review meta
//   getMeta() {
//     let product_id = this.props.product_id;
//     axios
//       .get('/reviews/meta', { params: { product_id: product_id } })
//       .then(res => {
//         const data = res.data;

//         this.setState({
//           reviewMeta: data
//         });
//       })
//       .catch((err) => {
//         console.log('error with reviews', err);
//       });
//   }

  //get review meta
  // const getMeta = () => {
  //   axios
  //     .get('/reviews/meta', { params: { product_id: product_id } })
  //     .then(res => {
  //       setReviewMeta(res.data);
  //     })
  //     .catch((err) => {
  //       console.log('error with reviews', err);
  //     });
  // }

    // useEffect(() => (
  //   getReviews(dropdown)
  // ), [dropdown]);



//   //Put review req

//   //Q&A API CALLS

//   getQuestions() {
//     // const product_id = this.props.product_id;
//     const product_id = 40345
//     axios
//       .get('/qa/questions', { params: {
//         product_id: product_id
//       }})
//       .then(res => {
//         const data = res.data;
//         this.setState({
//           questions: data
//         });
//       })
//       .catch((err) => {
//         console.log('error with questions', err);
//       });
//   }

//   //component did mount
//   componentDidMount() {
//     this.getReviews();
//     this.getMeta();
//     this.getQuestions();
//   }

//   render() {
//     //console.log('review star in feedback', this.props.reviewStars);
//     return (
//       <div>
//         <QuestionAnswer questions={this.state.questions}/>
//         <StarReview />
//         <div>
//         <RatingReview
//           reviews={this.state.reviews}
//           reviewStars={this.props.reviewStars}
//           meta={this.state.reviewMeta}
//           product_id={this.props.product_id}
//         />
//         </div>
//       </div>
//     )
//   }
// }

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
