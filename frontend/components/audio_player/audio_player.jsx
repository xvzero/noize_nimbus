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
      playing: false,
      volume: 1,
      muted: false,
      duration: 0,
      loop: false,
      played: 0,
      lastSeekStart: 0,
      lastSeekEnd: 0,
      lastIntent: 0,
      track: null
    };

    this.handlePausePlay = this.handlePausePlay.bind(this);
    this.handlePrevButton = this.handlePrevButton.bind(this);
    this.handleNextButton = this.handleNextButton.bind(this);
    this.handleLoopButton = this.handleLoopButton.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onDuration = this.onDuration.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.state.track)
      this.props.updateCurrentTrack(
        merge({}, this.state.track, {played: this.state.played})
      );

    if (newProps.currentTrackId) {
      const currentTrack = newProps.sessionTracks[newProps.currentTrackId];
      this.setState({
        url: currentTrack.track_file_url,
        played: currentTrack.played,
        playing: currentTrack.playing,
        track: currentTrack
      });
    }
  }

  handlePausePlay() {
    this.setState({ playing: !this.state.playing });
  }

  handlePrevButton() {
    this.setState({ played: 0 });
  }

  handleNextButton() {
    this.setState({ played: this.player.getDuration() });
  }

  handleLoopButton() {
    this.setState({ loop: !this.state.loop });
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  onProgress(state) {
    console.log(this.state);
    if (!this.state.seeking) this.setState(state);
  }

  onEnded() {
    if (this.state.loop) this.setState({ played: 0 });
  }

  onDuration(duration) {
    this.setState({ duration });
  }

  render() {
    return (
      <div className="audio-player-container">
        <div className="audio-player-elements">
          <ReactPlayer
            className="react-player"
            ref={player => (this.player = player)}
            width='100%'
            height='100%'
            url={this.state.url}
            playing={this.state.playing}
            loop={this.state.loop}
            volume={this.state.volume}
            muted={this.state.muted}
            onProgress={this.onProgress}
            onDuration={this.onDuration}
            onEnded={this.onEnded}
          />

          <div className="prev-button-container audio-player-button-containers">
            <button className="prev-button audio-player-control-buttons"
              onClick={this.handlePrevButton}
            />
          </div>

          { this.state.playing
            ?
            <div className="pause-button-container audio-player-button-containers">
              <button className="pause-button audio-player-control-buttons"
                onClick={this.handlePausePlay}
              />
            </div>
            :
            <div className="play-button-container audio-player-button-containers">
              <button className="play-button audio-player-control-buttons"
                onClick={this.handlePausePlay}
              />
            </div>
          }

          <div className="next-button-container audio-player-button-containers">
            <button className="next-button audio-player-control-buttons"
              onClick={this.handleNextButton}
            />
          </div>

          <div className="loop-button-container">
            <button className="loop-button audio-player-control-buttons"
              onClick={this.handleLoopButton}
            />
          </div>

          <div className="progress-bar-container">
            <div className="playback-time-elapsed">
              <span className="playback-time">
                <FormattedTime numSeconds={this.state.playedSeconds}/>
              </span>
            </div>

            <div className="progressbar-wrapper">
              <div className="progressbar-background">
                <div className="progressbar">
                  <input
                    type='range'
                    min={0}
                    max={1}
                    step='any'
                    defaultValue={this.state.played}
                    onMouseDown={this.onSeekMouseDown}
                    onChange={this.onSeekChange}
                    onMouseUp={this.onSeekMouseUp}
                    />
                </div>
              </div>
            </div>

            <div className="playback-time-duration">
              <span className="playback-duration">
                <FormattedTime numSeconds={this.state.duration}/>
              </span>
            </div>
          </div>


          <div className="volume-button-container">
            {this.state.muted ?
              <button className="volume-button"
                onClick={this.handleUnmute}
              />
              :
              <button className="mute-volume-button"
                onClick={this.handleMute}
              />
            }
            <input className="volume-slider"
              type='range'
              min={0}
              max={1}
              step='any'
              defaultValue={this.state.volume}
              onChange={this.setVolume}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;
