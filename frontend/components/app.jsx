import React from 'react';
import Modal from 'react-modal';
import Splash from './splash/splash';
import NavBarContainer from './navbar/navbar_container';
import UploadContainer from './upload/file_upload_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import TrackPageContainer from './track/track_page_container';
import UserProfileContainer from './user/user_profile_container';
// import { fetchUsers } from '../actions/user_actions';
// import { fetchTracks } from '../actions/track_actions';
// import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeModal: "" };
  }

  // componentDidMount() {
  //   this.props.fetchUsers();
  //   this.props.fetchTracks();
  //   // this.props.fetchComments();
  //   // this.props.fetchPlaylists();
  // }

  toggleModal(field) {
    this.setState({activeModal: field });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <Route path="/" component={NavBarContainer} />
        </Switch>
        <Switch>
          <Route path="/logout" component={TrackPageContainer} />
          <ProtectedRoute path="/stream" component={TrackPageContainer}/>
          <ProtectedRoute path="/collection" component={TrackPageContainer} />
          <Route path="/upload" component={UploadContainer} />
          <Route path="/:profileUrl/:trackUrl" component={TrackPageContainer} />
          <Route path="/:profileUrl" component={UserProfileContainer} />
        </Switch>
        <Route path="/" component={AudioPlayerContainer} />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   users: state.entities.users,
//   tracks: state.entities.tracks
// });
//
// const mapDispatchToProps = dispatch => ({
//   fetchUsers: () => dispatch(fetchUsers()),
//   fetchTracks: () => dispatch(fetchTracks())
// });


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

export default App;
