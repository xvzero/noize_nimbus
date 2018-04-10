import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => ({
  users: state.entities.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => fetchUsers()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
