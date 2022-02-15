import React,  {useState} from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Feedback from './Feedback.jsx';
import Data from './Overview/hardcodedData.jsx';
const TOKEN = configData.token;
const CAMPUS = configData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;

//Hardcoded prop data to pass to dropdown menus
const hardcodedSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const hardcodedQuantities = ['1', '2', '10', '16', '17'];

//Updated Component to use React Hooks (instead of class component)
const App = (props) => {
  const [data, setData] = useState([]);

  //Create a func to set the state of 'url' to the current URL of the window everytime it changes
  const [url, setURL] = useState(window.location.href);
  window.addEventListener('popstate', function (event) {
    return setURL(window.loaction.href);
  })

  //Create a func given an ID to GET all product information for overview
  const getFullProductInfo = (id) => {
    const route  = API + 'products/' + id;
    axios
      .get(route, {headers: {authorization: TOKEN}})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {console.log(err)})
  };

  return (
    <div className="content">
      <div>Jello World</div>
      <Overview sizesArr={hardcodedSizes} qtyArr={hardcodedQuantities} productData={data} url={url} getFullProductInfo={getFullProductInfo}/>
      <Feedback />
    </div>
  );
}

export default App;