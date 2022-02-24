import React, { useState } from 'react';
import '../style.css';
import { FaStar } from "react-icons/fa";
import { StarStyled, StarBorder, StarText } from '../Styled/StarStyled.js';

const Modal = ({ customClass, show, closeModal, setRating, setSummary, setBody, setRecommend, setUsername, setEmail, setForm }) => {
  const [modalRating, setModalRating] = useState(null);
  const [modalSummary, setModalSummary] = useState('');
  const [modalBody, setModalBody] = useState('');
  const [modalRecommend, setModalRecommend] = useState(null);
  const [modalUsername, setModalUsername] = useState('');
  const[modalEmail, setModalEmail] = useState('');
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
    alert("Submission Successful!");
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
                    <label className="StarReviewFiller" key={i}>
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
              <div className="modalBar starRating" > Your rating for this product: {starRating} </div>
              <div className="modalStarForm">
                1 star - “Poor” |
                2 stars - “Fair” |
                3 stars - “Average” |
                4 stars - “Good" |
                5 stars - “Great”
              </div>
            </div>

            <div className="modalSummary">
              <label>
                *Summary:
                <input
                  className="modalBar innerModalSummary"
                  onChange={handleSummary}
                  type="text"
                  maxLength="60"
                  placeholder="Example: Best purchase ever!"
                  value={modalSummary}
                  required
                />
              </label>
            </div>

            <div className="modalBody">
              <label>
                *Body:
                <input
                  className="modalBar innerModalBody"
                  onChange={handleBody}
                  type="text"
                  minLength="50"
                  maxLength="1000"
                  placeholder="Why did you like the product or not?"
                  value={modalBody}
                  required
                />
              </label>
            </div>

            <div className="modalRecommend">
              <label>
              *Recommend? :
              <input
                className="innerModalRecommend"
                type="radio"
                name="radioBut"
                value='Yes'
                onChange={handleRecommend} required
              />
                Yes
              </label>
              <label>
              <input
                className="innerModalRecommend"
                type="radio"
                name="radioBut"
                value='No'
                onChange={handleRecommend}
              />
                No
              </label>
            </div>

            <div className="modalNameEmail">
              <label>
               *Name:
                <input
                  className="modalBar innerModalNameEmail"
                  onChange={handleUsername}
                  type="text"
                  maxLength="60"
                  placeholder="Example: jackson11!"
                  value={modalUsername}
                  required
                />
                <div className="modalUserDisclaimer"> * For privacy reasons, do not use your full name or email address * </div>
              </label>
            </div>

            <div className="modalNameEmail">
              <label>
                *Email:
                <input
                  className="modalBar innerModalNameEmail"
                  onChange={handleEmail}
                  type="email"
                  placeholder="Example: jackson11@email.com"
                  value={modalEmail}
                  required
                />
                <div className="modalUserDisclaimer"> * For authentication reasons, you will not be emailed * </div>
              </label>
            </div>

            <input
              className="modalBar modalSubmit"
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