import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from '../store'
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";



function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  }

  const handleClick = (album) => {
    removeAlbum(album);
  }

    // Displaying loader, error or albums list
    let content;
    if (isLoading) {
      content = <Skeleton times={3} className="h-10 w-full"/>;
    } else if (error) {
      content =  <div>Error fetching data...</div>;
    } else {
      content = data.map((album) => {
        //const header = <div>{album.title}</div>
        const header =  <>
        <Button loading={isLoading} onClick={() => handleClick(album)}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting album</div>}
        {album.title}
      </>
        return(
          <ExpandablePanel key={album.id} header={header}>
            List of Photos in  the album.
          </ExpandablePanel>
        )
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
