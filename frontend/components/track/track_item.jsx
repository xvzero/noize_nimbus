import React from 'react';
import ReactPlayer from 'react-player';
import merge from 'lodash/merge';
import EditTrackFormContainer from './edit_track_form_container';
import Modal from 'react-modal';

class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ activeModal: !this.state.activeModal });
  }

  playPauseTrack(track) {
    this.props.playPauseTrack(track);
  }

  handleDelete() {
    const answer = confirm("Are you sure you want to delete this song? You cannot undo the delete.");
    if (answer === true) this.props.deleteTrack(this.props.track.id, this.props.track.track_url);
  }

  playPauseButton() {
    const player = this.props.audioPlayer;

    if (player.playing && player.currentTrackId === this.props.track.id)
      return 'pause-button';
    else
      return 'play-button';
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
              onClick={() => this.playPauseTrack(this.props.track)}>
            </button>
            <header className="track-header-details">
              <h2 className="track-artist">{this.props.user.display_name}</h2>
              <h1 className="track-name">{this.props.track.title}</h1>
            </header>
          </header>
          <div className="track-wave-form">
          </div>

          { this.props.track.author_id === this.props.currentUser.id &&
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
