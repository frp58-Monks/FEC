import React, { useState } from 'react';
import '../style.css';
import { FaStar } from "react-icons/fa";
import { StarStyled, StarBorder, StarText } from '../Styled/StarStyled.js';

const Modal = ({ customClass, show, closeModal, setRating, setSummary, setBody, setRecommend, setUsername, setEmail, children, setForm }) => {
  const [modalRating, setModalRating] = useState(null);
  const [modalSummary, setModalSummary] = useState('');
  const [modalBody, setModalBody] = useState('');
  const [modalRecommend, setModalRecommend] = useState(null);
  const [modalUsername, setModalUsername] = useState('');
  const[modalEmail, setModalEmail] = useState('');
  // const[success, setSuccess] = useState(true);
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);

 const handleRating = (e) => {
    setModalRating(e.target.value);
    setStarRating(e.target.value);
    setRating(e.target.value);
  }

  const handleSummary = (e) => {
    setModalSummary(e.target.value);
    setSummary(e.target.value);
  }

  const handleBody = (e) => {
    setModalBody(e.target.value);
    setBody(e.target.value);
  }

  const handleRecommend = (e) => {
      setModalRecommend(e.target.value);
      //setRecommend(e.target.value);
      // setSuccess(true);
  }

  const handleUsername = (e) => {
    setModalUsername(e.target.value);
    setUsername(e.target.value);
  }

  const handleEmail = (e) => {
    setModalEmail(e.target.value);
    setEmail(e.target.value);
  }

 const handleSubmit = (e) => {
    e.preventDefault();

  //function to convert recommended to boolean
    if (typeof modalRecommend === 'string' && modalRecommend === 'No') {
      setRecommend(false);
    } else {
      setRecommend(true);
    };
  //form was triggered
    setForm(true);
  }


  return (
      <div className={`modal ${customClass}`} style={{ display: show ? 'block' : 'none' }}>

        <div className="overlay" onClick={closeModal}></div>

        <div className="modalContent">
          <form onSubmit={handleSubmit}>

            <div className="StarReview">
              {
                [...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label className="StarReviewFiller">
                      <StarStyled className="StarReviewRadio">
                      <input
                        type='radio'
                        name='rating'
                        value={ratingValue}
                        onClick={handleRating}
                        onMouseOver={() => setHover(ratingValue)}
                        onMouseOut={() => setHover(null)}
                      />
                        <FaStar
                          className="StarIcon"
                          color={ratingValue <= (hover || starRating) ? '#ffc107' : '#e4e5e9'}
                          size={100}
                        />
                      </StarStyled>
                    </label>
                )
              })
            }
            </div>

            <label>
              Summary:
              <input
                onChange={handleSummary}
                type="text"
                value={modalSummary}
              />
            </label>

            <label>
              Body:
              <input
                onChange={handleBody}
                type="text"
                value={modalBody}
              />
            </label>

            <div>
              <label>
              Recommend?:
              <input type="radio" value='Yes' onChange={handleRecommend}/>
                Yes
              </label>
              <label>
              <input type="radio" value='No' onChange={handleRecommend} />
                No
              </label>
            </div>

            <label>
              Name:
              <input
                onChange={handleUsername}
                type="text"
                value={modalUsername}
              />
            </label>

            <label>
              Email:
              <input
                onChange={handleEmail}
                type="email"
                value={modalEmail}
              />
            </label>

            <input
              type="submit"
              value="Submit"
              messsage='Submission Sucessful'
            />
          </form>

          <button title="Close" className="closeModal" onClick={closeModal} >
          </button>
        </div>

      </div>
  );
};

export default Modal;

// const Modal = ({ customClass, show, closeModal, setRating, setSummary, setBody, setRecommend, setUsername, setEmail, postFunc, children, setForm })

/*
<label>
Photos:
<input
  onChange={handlePhotos}
  type="text"
  value={modalPhotos}
/>
</label>

<label>
Characteristics:
<input
  onChange={handleCharacteristics}
  type="text"
  value={modalCharacteristics}
/>
</label>

  // const handlePhotos = (e) => {
  //   setModalPhotos([]);
  //   setEmail(e.target.value);
  // }

  // const handleCharacteristics = (e) => {
  //   setmodalCharacteristics(e.target.value);
  //   setEmail(e.target.value);
  // }


            <label>
              Recommend?:
              <input
                onChange={handleRecommend}
                placeholder="yes/no"
                type="text"
                value={modalRecommend}
              />
            </label>

            RATING INPUT

                        <label>
              Rating:
              <input
                onChange={handleRating}
                type="text"
                placeholder='1, 2, 3, 4, 5'
                value={modalRating}
              />
            </label>
*/