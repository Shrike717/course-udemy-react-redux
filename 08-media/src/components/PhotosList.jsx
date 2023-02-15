import React from 'react'
import { useFetchPhotosQuery } from '../store'

function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  return (
    <div>PhotosList</div>
  )
}

export default PhotosList
