import React from 'react';
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.sessionErrors,
  formType: "Continue"
});

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  processForm: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
