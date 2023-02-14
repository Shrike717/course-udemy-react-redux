import React from 'react'
import { GoTrashcan } from 'react-icons/go';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsListItem({ album }) {
  const header = <div>
    <Button>
      <GoTrashcan />
    </Button>
    {album.title}
    </div>
  return(
    <ExpandablePanel key={album.id} header={header}>
      List of Photos in  the album.
    </ExpandablePanel>
  )
}

export default AlbumsListItem
