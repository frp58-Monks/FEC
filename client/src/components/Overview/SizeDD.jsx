import React, {useState, useEffect, useContext} from 'react';

const SizeDropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(props.sizesArr[0]);

  return (
    <div className="size-dd">
      Choose a Size:
      <select name="Size" id="size-DD" onChange={(e) => {
        setSize(e.target.value);
      }}>
      {props.sizesArr.map((size) => {
        return <option key={size} value={size}>{size}</option>
      })}
      </select>
    </div>
  );
};

export default SizeDropdown;