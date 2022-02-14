import React from 'react';
import axios from 'axios';
import configData from '../config/config.js';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import { FaStar } from "react-icons/fa";
import { StarStyled, StarBorder } from './styled/StarStyled.js';
const TOKEN = configData.token;
const CAMPUS = configData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    //------------Bind_Class_Methods_Here------------//
    this.getProducts = this.getProducts.bind(this);
    // this.starRatings = this.starRatings.bind(this);
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
  // }

  componentDidMount() {
    this.getProducts('products');
  }

  //------------Render_Here------------//
  render () {
    return (
      <div className="content">
        <div>Jello World</div>
        <StarBorder>
          {
            [...Array(5)].map((star) => (
              <label>
                  <StarStyled>
                    <input type='radio' name='rating'></input>
                    <FaStar />
                  </StarStyled>
              </label>
            ))
          }
        </StarBorder>
          <Overview />
          <Feedback />
      </div>
    );
  }
}

export default App;

/*
  {
            [...Array(5)].map((star) => (
              <label>
                <input type='radio' name='rating'></input>
                <FaStar />
              </label>
            ))
          }

        */