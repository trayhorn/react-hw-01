import PropTypes from 'prop-types';
import { Status, Friend, Avatar, Name } from './FriendListItem.jsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <Status style={{backgroundColor: isOnline ? "blue" : "red"}}>{isOnline}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Friend>
  )
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}


