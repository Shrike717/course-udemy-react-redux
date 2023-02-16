import React from 'react'

function PhotosListItem({ photo }) {
  return (
    <div>
      <img className='h-20 w-20' src={photo.url} alt="Random pic"/>
    </div>
  )
}

export default PhotosListItem
