import React from 'react';
import { connect } from 'react-redux';
import { signup, login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: "Continue"
});

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
