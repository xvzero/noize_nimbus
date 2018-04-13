import React from 'react';
import { connect } from 'react-redux';
import { updateTrack, removeErrors } from '../../actions/track_actions';
import TrackForm from './track_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors.trackErrors,
  formType: 'edit'
});

const mapDispatchToProps = dispatch => ({
  updateTrack: track => dispatch(updateTrack(track)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
