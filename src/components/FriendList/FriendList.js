import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css"


export default function FriendList({friends}) {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  )
}



