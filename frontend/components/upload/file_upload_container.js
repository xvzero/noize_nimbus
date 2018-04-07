import React from 'react';
import { connect } from 'react-redux';
import { receiveUpload } from '../../actions/upload_actions';
import FileUpload from './file_upload';

const mapStateToProps = state => ({
  uploads: state.entities.uploads,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createUpload: upload => dispatch(receiveUpload(upload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileUpload);
