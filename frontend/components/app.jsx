import React from 'react';
import Modal from 'react-modal';
import Splash from './splash/splash';
import NavBarContainer from './navbar/navbar_container';
import UploadContainer from './upload/file_upload_container';
import ProgressBarContainer from './progressbar/progressbar_container';
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
    this.state = { activeModal: ""};
  }

  toggleModal(field) {
    this.setState({activeModal: field });
  }

  render() {
    return (
      <div>
        <header>
          <Switch>
            <AuthRoute exact path="/" component={Splash} />
            <Route path="/" component={NavBarContainer} />
          </Switch>
        </header>
          <Switch>
            <Route path="/upload" component={UploadContainer} />
          </Switch>
      </div>
    );
  }
}

export default App;
