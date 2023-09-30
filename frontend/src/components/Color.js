import React from 'react';

const Color = (props) => {
  const { setColor, colorData } = props;

  
  if (!Array.isArray(colorData)) {
    return null; 
  }

  return (
    <ul className='colors ps-0'>
      {colorData.map((item, index) => (
        <li onClick={() => setColor(item?._id)} style={{ backgroundColor: item?.title }} key={index} ></li>
      ))}
    </ul>
  );
};

export default Color;
