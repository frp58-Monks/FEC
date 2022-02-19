import React, { useState, useEffect, useContext } from 'react';
import './ImageCarousel.css';
import { AppContext } from '../App.jsx';

const ImageCarousel = () => {
  const { productStyles } = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [currentStyle, setCurrentStyle] = useState(null);

  const updateIndex = (newIndex) => {
    if (productStyles) {
      const totalImages = productStyles.results[0].photos.length;
      if (newIndex < 0) {
        newIndex = totalImages -1;
      } else if (newIndex >= totalImages) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    }
  }

  // Auto Swipte the Carousel
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

  // console.log({'Styles stylesProp': productStyles});
  return (
    <div className="carousel">

      <div className="theCaro"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)` }}>
          {productStyles && productStyles.results[0].photos.map((eachImg) => {
            // console.log('image carousel images: ', eachImg.url);
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

    </div>

  );
}

export default ImageCarousel;