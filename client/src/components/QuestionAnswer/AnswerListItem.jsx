import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnswerListitem = (props) => {

  return (
    <div className="AnswerListItem">
      <hr/><br/>
      <div>
        Answered by: {props.answer.answerer_name}
      </div>
      <div>
        Answer: {props.answer.body}
      </div>
    </div>
  );
}

export default AnswerListitem;

