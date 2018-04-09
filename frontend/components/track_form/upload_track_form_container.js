import React from 'react';
import { connect } from 'react-redux';
import { createTrack, removeErrors } from '../../actions/track_actions';
import { receiveUpload, removeUpload } from '../../actions/upload_actions';
import TrackForm from './track_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.trackErrors
});

const mapDispatchToProps = dispatch => ({
  processForm: (track, uploadId) => dispatch(createTrack(track, uploadId)),
  updateUpload: upload => dispatch(receiveUpload(upload)),
  removeUpload: uploadId => dispatch(removeUpload(uploadId)),
  removeErrors: uploadId => dispatch(removeErrors(uploadId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
