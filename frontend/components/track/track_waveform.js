require('wavesurfer.js');

import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';

class TrackWaveform extends React.Component {
  constructor(props) {
    super(props);
    this.handleSeekChange = this.handleSeekChange.bind(this);
    this.handleReady = this.handleReady.bind(this);
  }

  handleSeekChange(e) {
    this.props.seekAudioPlayer(
      this.props.track.track_url,
      e.originalArgs[0] * e.wavesurfer.getDuration(),
      e.wavesurfer.getDuration()
    );
  }

  handleReady(e) {
    e.wavesurfer.setMute(true);
  }

  render() {
    const options = {
      container: document.querySelector(".track-wave-form"),
      barHeight: 0.5,
      barWidth: 2,
      normalize: false,
      cursorWidth: 0,
      progressColor: '#f50',
      waveColor: '#999'
    };

    return (
      <div>
        <Wavesurfer
          onReady={this.handleReady}
          audioFile={this.props.track.track_file_url}
          pos={this.props.playedSeconds}
          onSeek={this.handleSeekChange}
          playing={this.props.playing}
          options={options}
        />
      </div>
    );
  }
}

export default TrackWaveform;
