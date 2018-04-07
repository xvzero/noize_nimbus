import React from 'react';
import { connect } from 'react-redux';
import { removeUpload } from '../../actions/upload_actions';
import UploadIndex from './upload_index';

const mapStateToProps = state => ({
  uploads: Object.values(state.entities.uploads).reverse()
});

const mapDispatchToProps = dispatch => ({
  removeUpload: uploadId => dispatch(removeUpload(uploadId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadIndex);
