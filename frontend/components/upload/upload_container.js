import React from 'react';
import { connect } from 'react-redux';
import Upload from './upload';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Upload);
