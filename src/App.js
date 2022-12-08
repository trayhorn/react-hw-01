import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import friends from "./components/FriendList/FriendListItem/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";


export default function App() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}
