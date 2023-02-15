import React from 'react'
import Button from './Button';
import { useFetchPhotosQuery, useAddPhotoMutation } from '../store'

function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  }
  return (
    <div>
      <div className='m-2 flex flex-row justify-between items-center'>
        <h3 className='font-bold'>Photos in Album {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  )
}

export default PhotosList
