import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../reducers/userReducer';

const UserComponent = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const newUser = { name: 'John Doe' };
    dispatch(setUser(newUser));
  };

  return (
    <div>
      <h1>User: {user ? user.name : 'Not logged in'}</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default UserComponent;
