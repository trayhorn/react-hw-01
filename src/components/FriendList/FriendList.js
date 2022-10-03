import PropTypes from 'prop-types';
import FriendListItem from "../FriendListItem/FriendListItem";


export default function FriendList({friends}) {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  )
}


