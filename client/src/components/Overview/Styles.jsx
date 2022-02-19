import React, {useState} from 'react';
import './StylesOver.css';

const Styles = (props) => {
  // const [defaultId, setDefaultId] = useState(null);
  // console.log({'Styles stylesProp': props.productStyles});

  let allImages = null;
  if (props.productStyles) {
    allImages = props.productStyles.results;
  }

  return (
    <div>
      {/* <div className="styles">
        {allImages && allImages[0].photos.map((eachImg) => {
        return <img className="productStyles" src={eachImg.url}/>
        })}
      </div> */}
      <div>styles</div>
    </div>
  );
}

export default Styles;