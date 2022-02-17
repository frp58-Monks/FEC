import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const QuestionAnswer = (props) => {

  const [questions, setQuestions] = useState([]);
  const [question_id, setQuestion_id] = useState(null);
  const [product_id, setProduct_id] = useState(props.product_id);

  useEffect(() => (
    axios.get('/qa/questions', { params: {
      product_id: props.product_id,
      page: 1,
      count: 2
    }})
      .then((res) => { setQuestions(res.data); console.log({'Questions': questions})})
      .catch((err) => {console.log('Client GET ERR', err)
    })
  ), [product_id]);


  return (
    <div>Question and Answer Components Here</div>
  );
}

export default QuestionAnswer;