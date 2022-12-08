import PropTypes from 'prop-types';
import s from './Profile.module.css';


export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats
}) {
  return (
    <div className={s.profile}>
      <div className={s.profileHeader}>
        <img className={s.photocard}
          src={avatar}
          alt={username}
        />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
}