import PropTypes from 'prop-types';
import {
  ProfileCard, Avatar, Statistics, Tag,
  Name, Item, Location} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats
}) {
  return (
    <ProfileCard>
      <div>
        <Avatar
          src={avatar}
          alt={username}
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Statistics>
        <Item>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <span>Views</span>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <span>likes</span>
          <span>{stats.likes}</span>
        </Item>
      </Statistics>
    </ProfileCard>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}