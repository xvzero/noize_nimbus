import React from 'react';
import { connect } from 'react-redux';
import { createTrack, removeUploadErrors } from '../../actions/track_actions';
import { receiveUpload, removeUpload } from '../../actions/upload_actions';
import TrackForm from './track_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.trackErrors,
  formType: 'upload'
});

const mapDispatchToProps = dispatch => ({
  createTrack: (track, uploadId) => dispatch(createTrack(track, uploadId)),
  updateUpload: upload => dispatch(receiveUpload(upload)),
  removeUpload: uploadId => dispatch(removeUpload(uploadId)),
  removeUploadErrors: uploadId => dispatch(removeUploadErrors(uploadId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
