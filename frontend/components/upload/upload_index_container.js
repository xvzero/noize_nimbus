import React from 'react';
import { connect } from 'react-redux';
import Upload from './upload';

const mapStateToProps = state => ({
  uploads: state.uploads
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
