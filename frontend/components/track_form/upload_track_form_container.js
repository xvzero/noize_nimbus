import React from 'react';
import { connect } from 'react-redux';
import { createTrack, removeErrors } from '../../actions/track_actions';
import TrackForm from './track_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  processForm: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
