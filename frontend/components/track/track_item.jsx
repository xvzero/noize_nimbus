import React from 'react';
import ReactPlayer from 'react-player';
import merge from 'lodash/merge';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0
    };

    this.playPauseTrack = this.playPauseTrack.bind(this);
  }

  playPauseTrack(trackInfo) {
    this.props.playPauseTrack(trackInfo);
  }

  render() {
    const track = this.props.track;
    const trackInfo = merge(track, this.state);
    console.log(this.props.user);
    return (
      <div className="track-details-container">
        <div className="track-image-container">
          <img className="track-image" src={trackInfo.track_img_url} />
        </div>
        <div className="track-details">
          <header className="track-header-details">
            <button className="play-button"
              onClick={() => this.playPauseTrack(trackInfo)}>
              PLAY/PAUSE TRACK
            </button>
            <header className="header-details">
              <h2 className="track-artist">{}</h2>
              <h1 className="track-name">{track.title}</h1>
            </header>
          </header>
          <div className="track-wave-form">
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItem;
