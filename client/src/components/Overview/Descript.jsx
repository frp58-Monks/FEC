import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App.jsx';

const Description = () => {
  const { productDetails } = useContext(AppContext);
  // const [sentencesArr, setSentencesArr] = useState(null);

  let sentencesArr = null

  if (productDetails) {
    sentencesArr = [];
    let prodDescr = productDetails.description;
    let descrLettersArray = productDetails.description.split('');

    let sentence;
    let startingIndex = 0;
    for (var i = 0; i < descrLettersArray.length; i++) {
      let eachLetter = descrLettersArray[i];
      if (eachLetter === '.') {
        sentence = prodDescr.substring(startingIndex, i);
        sentencesArr.push(sentence);
        startingIndex = i + 1;
      } else if (eachLetter === '?' || eachLetter === '!') {
        sentence = prodDescr.substring(startingIndex, i + 1);
        sentencesArr.push(sentence);
        startingIndex = i + 2;
      }
    }
  }

  return (
    <div>
      <b>About this item: </b>
      <p>
        {sentencesArr &&
          <ul>
            {sentencesArr.map((eachSentence) => {
              return <option>- {eachSentence}</option>
            })}
          </ul>
        }
      </p>

    </div>
  );
}

export default Description;