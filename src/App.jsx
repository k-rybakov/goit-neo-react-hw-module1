import "./App.css";
import userData from "./storage/userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./storage/friends.json";
import FriendList from "./components/FriendList/FriendList";
import transactions from "./storage/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
