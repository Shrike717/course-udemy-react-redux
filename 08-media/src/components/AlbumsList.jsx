import React from 'react'
import { useFetchAlbumsQuery } from '../store'

function AlbumsList({ user }) {
  //const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const result = useFetchAlbumsQuery(user);

  console.log(result);
  return (
    <div>Albums for {user.name}</div>
  )
}

export default AlbumsList
