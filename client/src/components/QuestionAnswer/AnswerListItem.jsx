import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerListitem = (props) => {

  return (
    <div>
      {props.answer.body.length ? 'Answer: ' + props.answer.body : 'No answers to this question yet'}
    </div>
  );
}

export default AnswerListitem;

