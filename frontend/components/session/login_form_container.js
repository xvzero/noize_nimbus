import React from 'react';
import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.sessionErrors,
  formType: "Sign In",
  demoUser: { email: "demo_user@demo.com",
              display_name: "demo_user",
              password: "demodemo",
              age: 21}
});

const mapDispatchToProps = dispatch => ({
  removeErrors: () => dispatch(removeErrors()),
  processForm: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
