import React, { useState } from 'react';

const ImageHover = () => {
  const [imgSrc, setImgSrc] = useState('/images/image.gif');

  const handleMouseEnter = () => {
    setImgSrc(imgSrc.replace('.gif', '_on.gif'));
  };

  const handleMouseLeave = () => {
    setImgSrc(imgSrc.replace('_on.gif', '.gif'));
  };

  return (
    <img 
      src={imgSrc} 
      alt="menu" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
    />
  );
};

export default ImageHover;
