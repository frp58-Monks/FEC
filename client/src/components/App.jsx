import React, { useState } from 'react';
import axios from 'axios';
import configData from '../config/config.js';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
// import { FaStar } from "react-icons/fa";
// import { StarStyled, StarBorder } from './styled/StarStyled.js';
import StarReview from './RatingReview/StarReview.jsx';
const TOKEN = configData.token;
const CAMPUS = configData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      // stars: [1, 2, 3, 4, 5]
    };
    //------------Bind_Class_Methods_Here------------//
    this.getProducts = this.getProducts.bind(this);
    // this.starRatings = this.starRatings.bind(this);
    // this.onClick = this.onClick.bind(this);
    // this.getStars = this.getStars.bind(this);
  }
  //------------Class_Methods------------//
  getProducts(endpoint) {
    const route = API + endpoint;
    axios.get(route, {headers:
      {authorization: TOKEN}
    })
    .then((res) => {
      this.setState({input: res.data});
      console.log({'GET Responded with': this.state.input});
    })
    .catch((err) => {
      console.log({'GET Req': err})
    })
  }

  //------------Star Ratings------------//
  // starRatings () {
  //   const [rating, SetRating] = useState(null);

  //   [...Array(5)].map((star) => (
  //     <FaStar />
  //   ))
  // }

  // getStars () {
  //   let array = [...this.state.stars];

  //   for (var i = 0; i < array.length; i++) {
  //     this.setState([i + 1]);
  //   }
  // }

  // onClick (star) {
  //   this.getStars();
  // }

  componentDidMount() {
    this.getProducts('products');
  }

  //------------Render_Here------------//
  render () {
    return (
      <div className="content">
        <div>Jello World</div>
          <StarReview />
          <Overview />
          <Feedback />
      </div>
    );
  }
}

export default App;

/*
  <StarBorder>
            {
              [...Array(5)].map((star, i) => (
               <label>
                 <StarStyled>
                  <input type='radio' name='rating' value={i + 1}></input>
                  <FaStar />
                </StarStyled>
               </label>
              ))
            }
        </StarBorder>

        <StarReview value={this.state.stars} />

*/