import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';

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
    axios.get('/products')
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
        <Overview />
        <Feedback />
      </div>
    );
  }
}

export default App;