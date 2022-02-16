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

const getProductStyles = (product_id, callback) => {
  const route = API + `products/${product_id}/styles`;
  axios.get(route, {headers:
    {authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getReviews = (product_id, callback) => {
  const route = API + `reviews/`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: { product_id }})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getReviewsMeta = (product_id, callback) => {
  const route = API + `reviews/meta`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: { product_id }})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getQuestions = (product_id, callback) => {
  const route = API + `qa/questions`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: { product_id }})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getAnswers = (question_id, callback) => {
  const route = API + `qa/questions/${question_id}/answers`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: { question_id }})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductStyles,
  getReviews,
  getReviewsMeta,
  getQuestions,
  getAnswers
};