require('wavesurfer.js');

import React from 'react';
import ReactPlayer from 'react-player';
import merge from 'lodash/merge';
import EditTrackFormContainer from './edit_track_form_container';
import Modal from 'react-modal';
import Wavesurfer from 'react-wavesurfer';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playedSeconds: 0,
      playing: false,
      activeModal: false,
      options: {
        // container: document.querySelector(".track-wave-form"),
        barHeight: 0.5,
        barWidth: 2,
        normalize: false,
        cursorWidth: 0,
        progressColor: '#f50',
        waveColor: '#999'
      }
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSeekChange = this.handleSeekChange.bind(this);
    this.handleReady = this.handleReady.bind(this);
  }

  toggleModal() {
    this.setState({ activeModal: !this.state.activeModal });
  }

  handlePlayPause() {
    if (this.state.playing)
      this.props.pauseAudioPlayer();
    else
      this.props.playAudioPlayer(this.props.track.track_url);
  }

  componentWillReceiveProps(newProps) {
    const audioPlayer = newProps.audioPlayer;
    const active = audioPlayer.currentTrackURL === this.props.track.track_url;

    const playedSeconds =
      active ? audioPlayer.playedSeconds : audioPlayer.sessionTracks[this.props.track.track_url];

    this.setState({
      playing: audioPlayer.playing && active,
      playedSeconds: playedSeconds
    });
  }

  handleDelete() {
    const answer = confirm("Are you sure you want to delete this song? You cannot undo the delete.");
    if (answer === true)
      this.props.deleteTrack(this.props.track.id, this.props.track.track_url);
  }

  playPauseButton() {
    if (this.state.playing)
      return 'pause-button';
    else
      return 'play-button';
  }

  handleSeekChange(e) {
    this.setState({
      playedSeconds: e.originalArgs[0] * e.wavesurfer.getDuration()
    },
    () => this.props.seekAudioPlayer(
      this.props.track.track_url,
      this.state.playedSeconds,
      e.wavesurfer.getDuration()
    ));
  }

  handleReady(e) {
    e.wavesurfer.setMute(true);
  }

  render() {
    return (
      <div className="track-details-container">
        <div className="track-image-container">
          <img className="track-image" src={this.props.track.track_img_url} />
        </div>
        <div className="track-header-section">
          <header className="track-header">
            <button className={this.playPauseButton()}
              onClick={() => this.handlePlayPause()}>
            </button>
            <header className="track-header-details">
              <h2 className="track-artist">{this.props.track.track_artist}</h2>
              <h1 className="track-name">{this.props.track.title}</h1>
            </header>
          </header>
          <div className="track-wave-form">
            <Wavesurfer
              onReady={this.handleReady}
              audioFile={this.props.track.track_file_url}
              pos={this.state.playedSeconds}
              onSeek={this.handleSeekChange}
              playing={this.state.playing}
              options={this.state.options}
            />
          </div>

          { this.props.currentUser && (this.props.track.author_id === this.props.currentUser.id) &&
            <div className="edit-track-buttons">
              <button className="edit-track-button"
                onClick={() => this.toggleModal()}>Edit</button>

              <Modal isOpen={this.state.activeModal}
                onRequestClose={() => this.toggleModal()}
                ariaHideApp={false}
                className="track-form-modal"
                overlayClassName="track-form-overlay"
              >
                <EditTrackFormContainer
                  track={this.props.track}
                  audioPlayer={this.props.audioPlayer}
                  toggleModal={this.toggleModal} />
              </Modal>

              <button className="delete-track-button"
                onClick={() => this.handleDelete()}>Delete</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default TrackItem;
