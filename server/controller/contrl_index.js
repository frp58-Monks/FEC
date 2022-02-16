const Model = require('../model/model_index.js');

const getAllProducts = (req, res) => {
  Model.getAllProducts((err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  })
};

const getOneProduct = (req, res) => {
  const product_id = req.query.product_id;
  Model.getOneProduct(product_id, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(product);
    }
  })
};

const getProductStyles = (req, res) => {
  const product_id = req.query.product_id;
  Model.getProductStyles(product_id, (err, styles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(styles);
    }
  })
};

const getReviews = (req, res) => {
  const product_id = req.query.product_id;
  Model.getReviews(product_id, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};

const getReviewsMeta = (req, res) => {
  const product_id = req.query.product_id;
  Model.getReviewsMeta(product_id, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};

const getQuestions = (req, res) => {
  const product_id = req.query.product_id;
  Model.getQuestions(product_id, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductStyles,
  getReviews,
  getReviewsMeta,
  getQuestions
};