import React, {useState, useEffect, useContext } from 'react';
import './StylesOver.css';
import { AppContext } from '../App.jsx';
import { OverviewContext } from '../Overview.jsx';

const Styles = () => {
  const { productStyles } = useContext(AppContext);
  const { defaultStyle, updateCurrentStyle } = useContext(OverviewContext);

  return (
    <div style={{display: 'block'}}>
      <div>
        {defaultStyle &&
          <div><b>Current Style: </b>{defaultStyle.name}</div>
        }
      </div>

      <div className="stylesComponent">
        {productStyles && productStyles.results.map((eachStyle, i) => {
          if (eachStyle.name === defaultStyle.name) {
            return <img
            key={i}
            className="currentStyles"
            value={eachStyle["style_id"]}
            src={eachStyle.photos[0].thumbnail_url}
            onClick={(e) => updateCurrentStyle(e)}
            style={{'box-shadow': '2px 2px 2px black'}}
          />
          } else {
          return <img
            key={i}
            className="currentStyles"
            value={eachStyle["style_id"]}
            src={eachStyle.photos[0].thumbnail_url}
            onClick={(e) => updateCurrentStyle(e)}
          />
          }
        })}
      </div>
    </div>
  );
}

export default Styles;