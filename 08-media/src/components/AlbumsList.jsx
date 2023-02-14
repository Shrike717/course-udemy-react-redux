import React from 'react'
import { useFetchAlbumsQuery, useAddAlbumMutation } from '../store'
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";


function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

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
        const header = <div>{album.title}</div>
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
