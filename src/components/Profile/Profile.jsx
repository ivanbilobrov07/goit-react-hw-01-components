import PropTypes from 'prop-types';

import { ProfileContainer } from './Profile.styled';
import { UserInfo } from './UserInfo/UserInfo';
import { UserStats } from './UserStats/UserStats';

export const Profile = ({
  username,
  location,
  tag,
  avatar,
  stats: { likes, followers, views },
}) => {
  return (
    <ProfileContainer>
      <UserInfo
        username={username}
        location={location}
        tag={tag}
        avatar={avatar}
      />

      <UserStats likes={likes} views={views} followers={followers} />
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
