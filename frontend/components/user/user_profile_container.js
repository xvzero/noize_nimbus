import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers, updateUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userUrl],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: userData => dispatch(updateUser(userData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
