import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from '../store'
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import AlbumsListItem from './AlbumsListItem';



function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  }

    // Displaying loader, error or albums list
    let content;
    if (isLoading) {
      content = <Skeleton times={3} className="h-10 w-full"/>;
    } else if (error) {
      content =  <div>Error fetching data...</div>;
    } else {
      content = data.map((album) => {
        return <AlbumsListItem key={album.id} album={album}/>
      })
    }

  return (
    <div>
      <div className='m-2 flex flex-row justify-between items-center'>
        <h3 className='font-bold'>Albums of {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
        <div>
          {content}
        </div>
    </div>

  )
}

export default AlbumsList
