import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import PhotosList from './PhotosList';
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
      <PhotosList album={album} />
    </ExpandablePanel>
  )
}

export default AlbumsListItem
