import React from 'react';
import { useSelector } from 'react-redux';
import UserHeader from '../components/UseHeader';
import Account from '../components/Account';
// import { signOut } from '../reducers/userReducer';

const User = () => {
  const user = useSelector((state) => state.user.user);
//   const dispatch = useDispatch();

//   const handleSignOut = () => {
//     dispatch(signOut());
//   };

  return (
    <main className="main bg-dark">
      {user ? (
        <>
          <UserHeader firstName={user.firstName} lastName={user.lastName} />
          <h2 className="sr-only">Accounts</h2>
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
          {/* <button onClick={handleSignOut} className="sign-out-button">Sign Out</button> */}
        </>
      ) : (
        <p>Please sign in to view your account details.</p>
      )}
    </main>
  );
};

export default User;
