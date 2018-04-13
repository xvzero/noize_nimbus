import React from 'react';
import Modal from 'react-modal';
import Splash from './splash/splash';
import NavBarContainer from './navbar/navbar_container';
import UploadContainer from './upload/file_upload_container';
import AudioPlayerContainer from './audio_player/audio_player_container';
import TrackIndexContainer from './track/track_index_container';
import TrackPageContainer from './track/track_page_container';
import UserProfileContainer from './user/user_profile_container';
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
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <AuthRoute exact path="/" component={Splash} />
          <Route path="/" component={NavBarContainer} />
        </Switch>
        <Switch>
          <Route path="/logout" component={TrackIndexContainer} />
          <AuthRoute path="/login" component={TrackIndexContainer} />
          <ProtectedRoute path="/stream" component={TrackIndexContainer}/>
          <ProtectedRoute path="/collection" component={TrackIndexContainer} />
          <Route path="/upload" component={UploadContainer} />
          <Route path="/:userUrl/:trackUrl" component={TrackPageContainer} />
          <Route path="/:userUrl" component={UserProfileContainer} />
        </Switch>
        <Route path="/" component={AudioPlayerContainer} />
      </div>
    );
  }
}

export default App;
