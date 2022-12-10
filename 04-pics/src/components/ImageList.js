import React from 'react';
import ImageShow from './ImageShow';

// Hier kommt der Array aus App an.
function ImageList( {images} ) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />
  });
  return <div>{renderedImages}</div>
};

export default ImageList;
