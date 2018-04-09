import React from 'react';
import SessionContainer from '../session/session_container';

class Splash extends React.Component {
  render() {

    return (
      <div className="splash">
        <div className="top-bar-decoration"></div>
        <div className="splash-hue">
          <div className="splash-image" src="./assets/splash/0.jpg" />
            <header className="top-splash">
              <div className="header-logo">
                <img className="left-logo" src="./assets/logo/logo.png" />
                <p>NOIZENIMBUS</p>
              </div>
              <div className="splash-session-buttons">
                <SessionContainer />
              </div>
            </header>
            <div className="bottom-splash">
              <h1>{`Discover more with NoizeNimbus`}</h1>
            </div>
        </div>


      </div>
    );
  }
}

export default Splash;
