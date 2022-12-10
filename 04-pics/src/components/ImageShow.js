import React from 'react';

function ImageShow( {image} ) {
  console.log(image);
  return <div>{image.id}</div>
}

export default ImageShow;
