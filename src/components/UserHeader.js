import PropTypes from 'prop-types';

const UserHeader = ({ username }) => (
  <div className="header">
    <h1>Welcome back<br />{username}!</h1>
    <button className="edit-button">Edit Name</button>
  </div>
);

UserHeader.propTypes = {
  username: PropTypes.string.isRequired
};

export default UserHeader;