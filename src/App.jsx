import "./App.css";
import userData from "./storage/userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./storage/friends.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
  // friends.map(({ avatar, name, isOnline, id }) =>
  //   console.log(avatar, name, isOnline, id)
  // );

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
    </>
  );
}

export default App;
