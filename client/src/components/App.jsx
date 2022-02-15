import React,  {useState} from 'react';
import axios from 'axios';
import configData from '../config/config.js';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import Data from './Overview/hardcodedData.jsx';
const TOKEN = configData.token;
const CAMPUS = configData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

const hardcodedSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const hardcodedQuantities = ['1', '2', '10', '16', '17'];

const App = (props) => {


  const [data, setData] = useState([]);
  //current url cange state to new location
  const [url, setURL] = useState(window.location.href);

  window.addEventListener('popstate', function (event) {
    return setURL(window.loaction.href);
  })

  const getRequest = () => {
    axios.get(API)
      .then((res) => {
        setData(res.data)
        console.log({'GET Responded with': data});
      })
      .catch((err) => {console.log({'GET Req': err})
      })
  }

  return (
    <div className="content">
      <div>Jello World</div>
      <Overview sizesArr={hardcodedSizes} qtyArr={hardcodedQuantities} productData={data} url={url}/>
      <Feedback />
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     //------------Bind_Class_Methods_Here------------//
//     this.getProducts = this.getProducts.bind(this);
//   }
//   //------------Class_Methods------------//
//   getProducts(endpoint) {
//     const route = API + endpoint;
//     axios.get(route, {headers:
//       {authorization: TOKEN}
//     })
//     .then((res) => {
//       this.setState({input: res.data});
//       console.log({'GET Responded with': this.state.input});
//     })
//     .catch((err) => {
//       console.log({'GET Req': err})
//     })
//   }

  // componentDidMount() {
  //   this.getProducts('products');
  // }

  //------------Render_Here------------//
//   render () {
//     return (
//       <div className="content">
//         <div>Jello World</div>
//         <Overview sizesArr={hardcodedSizes} qtyArr={hardcodedQuantities} productData={data}/>
//         <Feedback />
//       </div>
//     );
//   }
// }

export default App;