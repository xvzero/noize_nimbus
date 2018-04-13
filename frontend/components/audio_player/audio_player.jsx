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
import Slider from 'react-rangeslider';
import merge from 'lodash/merge';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      playing: false,
      volume: 1,
      previousVolume: 0,
      muted: false,
      duration: 0,
      loop: false,
      playedSeconds: 0,
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
    this.setDuration = this.setDuration.bind(this);
    this.onVolumeChange = this.onVolumeChange.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.handleMute = this.handleMute.bind(this);
  }

  componentWillReceiveProps(newProps) {
    const newTrack = newProps.currentTrackId !== this.props.currentTrackId;

    if (this.state.url && newProps.currentTrackId !== this.props.currentTrackId)
      newProps.updateAudioPlayer(merge({}, this.state));

    if (newProps.currentTrackId !== this.props.currentTrackId) {
      const currentTrack = newProps.sessionTracks[newProps.currentTrackId];
      const playedSeconds = currentTrack.playedSeconds || 0;
      this.setState({
        url: currentTrack.track_file_url,
        playedSeconds: playedSeconds,
        track: currentTrack,
        playing: true
      }, () => this.player.seekTo(this.state.playedSeconds));
    }
  }

  handlePausePlay() {
    this.setState({ playing: !this.state.playing });
  }

  handlePrevButton() {
    this.setState({ playedSeconds: 0 },
    () => this.player.seekTo(this.state.playedSeconds));

  }

  handleNextButton() {
    this.setState({ playedSeconds: this.player.getDuration() },
    () => this.player.seekTo(this.state.playedSeconds));
  }

  handleLoopButton() {
    this.setState({ loop: !this.state.loop });
  }

  onSeekMouseDown() {
    this.setState({ seeking: true });
  }

  onSeekChange(playedSeconds) {
    this.setState({ playedSeconds });
  }

  onSeekMouseUp() {
    this.setState({ seeking: false });
    this.player.seekTo(this.progressbar.props.value);
  }

  onProgress(state) {
    if (!this.state.seeking) this.setState(state);
  }

  onEnded() {
    if (this.state.loop) this.setState({ playedSeconds: 0 });
  }

  setDuration(duration) {
    this.setState({ duration });
  }

  onVolumeChange(volume) {
    this.setState({ volume });
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  handleMute() {
    if (this.state.muted) {
      this.setState({
        volume: this.state.previousVolume,
        muted: !this.state.muted
      });
    } else {
      this.setState({
        previousVolume: this.state.volume,
        muted: !this.state.muted,
        volume: 0
      });
    }
  }

  render() {
    if (this.state.url) {
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
              onDuration={this.setDuration}
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
              { this.state.loop === false
                ?
                <button className="not-looping-button audio-player-control-buttons"
                  onClick={this.handleLoopButton}
                />
                :
                <button className="is-looping-button audio-player-control-buttons"
                  onClick={this.handleLoopButton}
                />
              }
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
                    <Slider
                      ref={progressbar => (this.progressbar = progressbar)}
                      min={0}
                      max={this.state.duration}
                      step={1}
                      value={this.state.playedSeconds}
                      orientation='horizontal'
                      tooltip={false}
                      onChangeStart={this.onSeekMouseDown}
                      onChange={this.onSeekChange}
                      onChangeComplete={this.onSeekMouseUp}
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
              { !this.state.muted && this.state.volume >= 0.5 &&
                <button className="high-volume-button"
                  onClick={this.handleMute}
                />
              }
              { !this.state.muted && this.state.volume < 0.5 && this.state.volume > 0 &&
                <button className="low-volume-button"
                  onClick={this.handleMute}
                />
              }
              { (this.state.muted || this.state.volume === 0) &&
                <button className="mute-volume-button"
                  onClick={this.handleMute}
                />
              }
              <div className="volume-slider">
                <Slider
                  ref={volumebar => (this.volumebar = volumebar)}
                  min={0}
                  max={1}
                  step={0.1}
                  value={this.state.volume}
                  orientation='vertical'
                  tooltip={false}
                  onChange={this.onVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default AudioPlayer;
