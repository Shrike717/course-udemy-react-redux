import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { useRemoveAlbumMutation } from '../store'


function AlbumsListItem({ album, user }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  }

  const header =
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>

  return(
    <ExpandablePanel key={album.id} header={header}>
      List of Photos in  the album.
    </ExpandablePanel>
  )
}

export default AlbumsListItem
