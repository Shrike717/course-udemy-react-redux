import React from 'react'
import { GoTrashcan } from "react-icons/go";
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  }

  return (
    <div className='mb-2 border rounded'>
      <div className="flex p-2 items-center cursor-pointer">
        <Button loading={isLoading} onClick={handleClick} className="mr-3">
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
      </div>
    </div>
  )
}

export default UsersListItem
