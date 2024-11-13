import React from "react";
import { useSelector } from "react-redux";
import UserHeader from "../components/UserHeader";
import Account from "../components/Account";

const User = () => {
  const user = useSelector((state) => state.user.user);

  const accounts = [
    {
      id: "1",
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: "2",
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: "3",
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <main className="main bg-dark">
      {user ? (
        <>
          <UserHeader userName={user.userName} firstName={user.firstName} lastName={user.lastName} />
          <h2 className="sr-only">Accounts</h2>
          {accounts.map((account) => (
            <Account
              key={account.id}
              accountId={account.id} // add fictive id
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </>
      ) : (
        <p className="error">Please sign in to view your account details.</p>
      )}
    </main>

    // return (
    //   <main className="main bg-dark">
    //     {user ? (
    //       <>
    //         <UserHeader firstName={user.firstName} lastName={user.lastName} />
    //         <h2 className="sr-only">Accounts</h2>
    //         <Account
    //           title="Argent Bank Checking (x8349)"
    //           amount="$2,082.79"
    //           description="Available Balance"
    //         />
    //         <Account
    //           title="Argent Bank Savings (x6712)"
    //           amount="$10,928.42"
    //           description="Available Balance"
    //         />
    //         <Account
    //           title="Argent Bank Credit Card (x8349)"
    //           amount="$184.30"
    //           description="Current Balance"
    //         />
    //       </>
    //     ) : (
    //       <p>Please sign in to view your account details.</p>
    //     )}
    //   </main>
  );
};

export default User;
