const Model = require('../model/model_index.js');

const getAllProducts = (req, res) => {
  const params = req.query;
  Model.getAllProducts(params, (err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  })
};

const getOneProduct = (req, res) => {
  const params = req.query;
  Model.getOneProduct(params, (err, product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(product);
    }
  })
};

const getProductStyles = (req, res) => {
  const params = req.query;
  Model.getProductStyles(params, (err, styles) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(styles);
    }
  })
};

const getReviews = (req, res) => {
  const params = req.query;
  Model.getReviews(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};

const getReviewsMeta = (req, res) => {
  const params = req.query;
  Model.getReviewsMeta(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};

const getQuestions = (req, res) => {
  const params = req.query;
  Model.getQuestions(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};

const getAnswers = (req, res) => {
  const params = req.query;
  Model.getAnswers(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
}

//PUT Requests
const putReviewHelpful = (req, res) => {
  const params = req.body.params;
  console.log('server put', params);

  Model.putReviewHelpful(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  })
}

module.exports = {
  getAllProducts,
  getOneProduct,
  getProductStyles,
  getReviews,
  getReviewsMeta,
  getQuestions,
  getAnswers,
  putReviewHelpful
};