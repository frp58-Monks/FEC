import React, { useState, useEffect, useContext } from 'react';

const QuestionAnswer = (props) => {

  const [questions, setQuestions] = useState([]);
  const [question_id, setQuestion_id] = useState(null);
  const [product_id, setProduct_id] = useState(props.product_id);

  useEffect(() => (
    axios.get('/qa/questions', { params: { product_id, page: 1, count: 2 }})
  ))


  return (
    <div>Question and Answer Components Here</div>
  );
}

export default QuestionAnswer;