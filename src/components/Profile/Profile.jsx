import PropTypes from 'prop-types';

import { ProfileContainer } from './Profile.styled';

export const Profile = ({
  username,
  location,
  tag,
  avatar,
  stats: { likes, followers, views },
}) => {
  return (
    <ProfileContainer>
      <div className="description">
        <img src={avatar} alt={username} className="avatar" width="200" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.exact({
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
