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
    return (
      <div className="track-container">
        <div className="track-image-container">

        </div>
        <div className="track-details">
          <div className="track-header-details">
            <h1 className="track-name">{track.title}</h1>
              <button className="play-button"
                onClick={() => this.playPauseTrack(trackInfo)}>
                PLAY/PAUSE TRACK
              </button>
          </div>
          <div className="track-wave-form">
          </div>
        </div>
      </div>
    );
  }
}

export default TrackItem;
