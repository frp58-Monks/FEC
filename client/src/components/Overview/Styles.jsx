import React, {useState} from 'react';

const Styles = (props) => {
  const [defaultId, setDefaultId] = useState(null);

  console.log({'Styles stylesProp': props.productStyles});
  return (
    <div>create styles sub-component here</div>
  );
}

export default Styles;

// {props.productStyles.results.map((item) => {
//   if (item['default?']) {
//     setDefaultId(item.style_id);
//   }
// })}