import React from 'react'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from './Skeleton';
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";


function UsersList() {
  // Here using custom hook useThunk
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  // Making use of biig state object from store
  const { data } = useSelector((state) => {
    return state.users;
  });

  // Fetching all users when app starts
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  // Adding a user
  const handleUserAdd = () => {
    doCreateUser();
  };

  // Displaying loader, error or user list
  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full"/>;
  } else if (loadingUsersError) {
    content =  <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return(
        <div key={user.id} className='mb-2 border rounded'>
          <div className="p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <div className='flex flex-row justify-between m-3 items-center'>
        <h1 className='m-2 text-xl'>Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add Users</Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  )
}

export default UsersList
