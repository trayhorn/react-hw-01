import FriendListItem from "./FriendListItem/FriendListItem";
import { Container } from './FrienList.styled';


export default function FriendList({friends}) {
  return (
    <Container>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Container>
  )
}



