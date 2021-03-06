import React from 'react';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  errors: state.errors.sessionErrors,
  formType: "login"
});

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
