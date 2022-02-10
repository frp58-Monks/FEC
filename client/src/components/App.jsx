import React from 'react';
import axios from 'axios';
import configData from '../config/config.js';
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

  componentDidMount() {
    this.getProducts('products');
  }

  //------------Render_Here------------//
  render () {
    return (
      <div className="content">
        <div>Jello World</div>
      </div>
    );
  }
}

export default App;