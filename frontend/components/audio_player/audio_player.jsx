import React from 'react';
import {
  PlayerButton,
  PauseButton,
  PlaybackControls,
  FormattedTime,
  ProgressBar,
  TimeMarker,
  SoundOnButton,
  SoundOffButton,
  MuteToggleButton,
  VolumeSlider
} from 'react-player-controls';
import ReactPlayer from 'react-player';
import merge from 'lodash/merge';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      playing: true,
      volume: 1,
      muted: false,
      played: 0,
      loaded: 0,
      duration: 0,
      playbackRate: 1.0,
      loop: false,
      track: null
    };

    this.playPause = this.playPause.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.track)
      this.props.updateCurrentTrack(
        merge({}, this.state.track, {duration: this.state.duration})
      );

    if (newProps.currentTrackId) {
      const currentTrack = newProps.sessionTracks[newProps.currentTrackId];
      this.setState({
        url: currentTrack.track_file_url,
        duration: currentTrack.duration,
        playing: currentTrack.playing,
        track: currentTrack
      });
    }
  }

  playPause() {
    console.log(this.state);
    this.setState({
      playing: !this.state.playing,
      duration: this.state.duration
    });
  }

  render() {
    return (
      <div className="audio-player">
        <div className="audio-player-controls">
          <ReactPlayer
            className="react-player"
            width='100%'
            url={this.state.url}
            playing={this.state.playing}
            loop={this.state.loop}
            volume={this.state.volume}
            muted={this.state.muted}
            onReady={() => console.log('ready to play')}
            onStart={() => console.log('start!')}
            onPlay={this.onPlay}
            onPause={this.onPause}
            onDuration={this.onDuration}
            playing
            controls
          />
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
