const axios = require ('axios');
const ConfigData = require ('../../config/myConfig.js');
const TOKEN = ConfigData.token;
const CAMPUS = ConfigData.campus;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS}/`;


const getAllProducts = (params, callback) => {
  axios.get(API + 'products', {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getOneProduct = (params, callback) => {
  const route = API + `products/${params.product_id}`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getProductStyles = (params, callback) => {
  const route = API + `products/${params.product_id}/styles`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getReviews = (params, callback) => {
  const route = API + `reviews/`;
  console.log('model reviews :', product_id);

  axios.get(route, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getReviewsMeta = (params, callback) => {
  const route = API + `reviews/meta`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getQuestions = (params, callback) => {
  const route = API + `qa/questions`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const getAnswers = (params, callback) => {
  const route = API + `qa/questions/${params.question_id}/answers`;
  axios.get(route, {headers:
    {authorization: TOKEN}, params: params})
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