import React from 'react';
import axios from 'axios';
var API = './theAPI';
import Token from '../config/config.js';

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
  getProducts(table) {
    axios.get(API, {
      authorization: Token,
      params: table
    })
    .then((res) => {
      this.seteState({input: res.data});
    })
    .catch((err) => {
      console.log({'GET Req': err})
    })
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