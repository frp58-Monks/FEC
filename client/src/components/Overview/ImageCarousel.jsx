import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App.jsx';
import { OverviewContext } from '../Overview.jsx';
import './ImageCarousel.css';

const ImageCarousel = () => {
  //-----------Contexts-----------
  const { productStyles } = useContext(AppContext);
  const { defaultStyle } = useContext(OverviewContext);
  //-----------States-----------
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  //-----------Functions-----------
  const updateIndex = (newIndex) => {
    if (productStyles) {
      const totalImages = defaultStyle.photos.length;
      if (newIndex < 0) {
        newIndex = totalImages -1;
      } else if (newIndex >= totalImages) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 10000);

    //Ensure interval stops running when our component is unmounted
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  //-----------Render-----------
  return (
    <div className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <div className="allImages" style={{transform: `translateX(-${activeIndex * 100}%)`, border: '5px black solid' }}>
        {productStyles && defaultStyle.photos.map((eachImg) => {
          return <img className="eachImage" src={eachImg.url} style={{width: '100%'}}/>
        })}
      </div>

      <div className="indicators">
        <button className="previousImg"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button className="nextImg"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>

      </div>

  );
}

export default ImageCarousel;