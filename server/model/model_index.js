const axios = require ('axios');
const ConfigData = require ('../../config/myConfig.js');
const TOKEN = ConfigData.token;
const CAMPUS = ConfigData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;


const getAllProducts = (callback) => {
  axios.get(API + 'products', {headers:
    {authorization: TOKEN}
  })
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getOneProduct = (product_id, callback) => {
  const route = API + `products/${product_id}`;
  axios.get(route, {headers:
    {authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

module.exports = { getAllProducts, getOneProduct };