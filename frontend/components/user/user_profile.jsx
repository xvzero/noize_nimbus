import React from 'react';
import TrackIndexContainer from '../track/track_index_container';

class UserProfile extends React.Component {
  render() {
    const user = this.props.users[this.props.match.params.profileUrl];
    return (
      <div className="user-profile-container">
        <div className="profile-banner">
          <div className="profile-img"></div>
          <div className="display-info">
            <h1 className="display-name">{user && user.display_name}</h1>
            <h6 className="real-name">
              {user && `${user.first_name} ${user.last_name}`}
            </h6>
            <h6 className="location">
              {user && `${user.city}, ${user.country}`}
            </h6>
          </div>
        </div>

        <TrackIndexContainer />
      </div>
    );
  }
}

export default UserProfile;