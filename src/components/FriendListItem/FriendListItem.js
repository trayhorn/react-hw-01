import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="friend-item">
      <span className="span-status">{isOnline}</span>
      <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}


