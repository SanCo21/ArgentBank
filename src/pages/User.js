import UserHeader from '../components/UserHeader';
import Account from '../components/Account';

// const User = () => (
//   <main className="main bg-dark">
//     <UserHeader username="Tony Jarvis" />
//     <h2 className="sr-only">Accounts</h2>
//     <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
//     <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
//     <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
//   </main>
// );

// export default User;


// for the demonstration
const User = ({ currentUser }) => {
    return (
        <main className="main bg-dark">
            <UserHeader firstName={currentUser.firstName} lastName={currentUser.lastName} />
            {/* Add more content specific to the user page here */}
            <h2 className="sr-only">Accounts</h2>
            <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
            <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
    /       <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
        </main>
    );
  };
  
  export default User;
 