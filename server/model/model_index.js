const axios = require ('axios');
const ConfigData = require ('../../config/config.js');
const TOKEN = ConfigData.token;
const CAMPUS = ConfigData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;


const getProducts = (callback) => {
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

module.exports = { getProducts };