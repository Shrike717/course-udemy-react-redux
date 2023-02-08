import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from './Skeleton';
import Button from "./Button";

function UsersList() {
  const [isLLoadingUsers, setIsLLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);
  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    setIsLLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => setLoadingUsersError(err))
      .finally(() => setIsLLoadingUsers(false))
  }, [dispatch]);

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
    .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  if (isLLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full"/>;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return(
      <div key={user.id} className='mb-2 border rounded'>
        <div className="p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
        {
          isCreatingUser
          ? "Creating user..."
          : <Button onClick={handleUserAdd}>+ Add Users</Button>
        }
        {creatingUserError && "Error creating user..."}

      </div>
      {renderedUsers}
    </div>
  )
}

export default UsersList
