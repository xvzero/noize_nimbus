import React from 'react';
import { connect } from 'react-redux';
import { fetchTracks } from '../../actions/track_actions';
import TrackIndex from './track_index';

const mapStateToProps = state => ({
  audio_player: state.ui.audio_player,
  tracks: state.entities.tracks
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch(fetchTracks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
