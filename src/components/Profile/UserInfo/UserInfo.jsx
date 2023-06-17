export const UserInfo = ({ location, avatar, username, tag }) => {
  return (
    <div className="description">
      <img src={avatar} alt={username} className="avatar" width="200" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};
