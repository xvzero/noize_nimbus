import React from 'react';
import TrackIndexContainer from '../track/track_index_container';
import EditUserForm from './edit_user_form';
import ErrorPage from '../error/error_page';
import Modal from 'react-modal';
import merge from 'lodash/merge';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: false,
      profile_img_file: null
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({activeModal: !this.state.activeModal });
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        profile_img_file: file,
      }, () => {
        const formData = new FormData();
        formData.append('user[id]', this.props.user.id);
        formData.append('user[profile_img_file]', this.state.profile_img_file);
        this.props.updateUser(formData);
      });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  getRealName(user) {
    if (user.first_name && user.last_name)
      return `${user.first_name} ${user.last_name}`;
    else if (user.first_name)
      return `${user.first_name}`;
    else if (user.last_name)
      return `${user.last_name}`;
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div className="user-profile-container">
          <div className="profile-banner">
            <div className="profile-img-container">
              <img className="profile-img" src={user.profile_img_url} />
              { (this.props.currentUser && this.props.currentUser.id === this.props.user.id) &&
                <label className="img-chooser-button">
                  <img src="../assets/icons/camera.png"></img>
                  Update image
                  <input type="file"
                    accept="image/*"
                    onChange={this.handleImageChange}
                    style={{display: "none"}}/>
                </label>
              }
            </div>
            <div className="profile-display-info">
              <h3 className="profile-display-name">{user && user.display_name}</h3>

              { (user.first_name || user.last_name)  &&
                <h4 className="profile-real-name">
                  { this.getRealName(user) }
                </h4>
              }
              { (user.city || user.country)  &&
                <h4 className="profile-location">
                  {`${user.city}${user.city && user.country ? ', ' : "" }${user.country}`}
                </h4>
              }
            </div>
          </div>
          <div className="user-info-tabs">
            { (this.props.currentUser && this.props.currentUser.id === this.props.user.id) &&

              <button className="edit-user-button"
                onClick={() => this.toggleModal()}>
                <img className="edit-icon" src="../assets/icons/edit.png"></img><p>Edit</p>
              </button>
            }

            { (this.props.currentUser && this.props.currentUser.id === this.props.user.id) &&
              <Modal isOpen={this.state.activeModal}
                onRequestClose={() => this.toggleModal()}
                ariaHideApp={false}
                className="user-form-modal"
                overlayClassName="user-form-overlay"
              >
                <EditUserForm
                  user={user}
                  updateUser={this.props.updateUser}
                  toggleModal={this.toggleModal} />
              </Modal>
            }
          </div>

          <TrackIndexContainer />

          <div className="bio-section">
            {this.props.bio}
          </div>
        </div>
      );
    } else {
      return <ErrorPage />;
    }
  }
}

export default UserProfile;
