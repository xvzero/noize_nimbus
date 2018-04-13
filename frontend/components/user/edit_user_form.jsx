import React from 'react';

class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        profile_img_url: fileReader.result,
        profile_img_file: file,
      });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    console.log(this.props);
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[id]', this.state.id);
    formData.append('user[display_name]', this.state.display_name);
    formData.append('user[profile_url]', this.state.profile_url);
    formData.append('user[first_name]', this.state.first_name);
    formData.append('user[last_name]', this.state.last_name);
    formData.append('user[city]', this.state.city);
    formData.append('user[country]', this.state.country);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[profile_img_file]', this.state.profile_img_file);
    formData.append('user[session_token]', this.state.session_token);
    this.props.updateUser(formData)
      .then(this.props.toggleModal());
  }

  componentWillMount() {
    this.setState(this.props.user);
  }

  render() {
    return (
      <form className="edit-form-container" onSubmit={e => e.preventDefault()}>
        <div className="edit-title-container">
          <h1 className="edit-title-header">Edit your Profile</h1>
        </div>

        <div className="edit-profile-form">
          <div className="edit-profile-img-container">
            <img className="edit-profile-img" src={this.state.profile_img_url} />
              <label className="img-chooser-button">
                <img src="../assets/icons/camera.png"></img>
                Update image
                <input type="file"
                  accept="image/*"
                  onChange={this.handleImageChange}
                  style={{display: "none"}}/>
              </label>
          </div>

          <div className="edit-details-container">
            <div className="edit-display-name">
              <label htmlFor="display_name">Display name</label>
                <input type="text"
                  value={this.state.display_name}
                  onChange={this.handleChange('display_name')}
                  id="display-name"
                />
            </div>

            <div className="edit-profile-url">
              <label>{`Profile URL`}</label>
              <div className="profile-url-container">
                <p htmlFor="profile-url">{`noize-nimbus.herokuapp.com/`}</p>
                <input type="text"
                  value={this.state.profile_url}
                  onChange={this.handleChange('profile_url')}
                  id="profile-url"
                  />
              </div>
            </div>

            <div className="name-section">
              <div className="edit-first-name">
                <label className="first-name-text">First name
                  <input type="text"
                    value={this.state.first_name || ""}
                    onChange={this.handleChange('first_name')}
                    className="first-name"
                  />
                </label>
              </div>

              <div className="edit-last-name">
                <label className="last-name-text">Last name
                  <input type="text"
                    value={this.state.last_name || ""}
                    onChange={this.handleChange('last_name')}
                    className="last-name"
                  />
                </label>
              </div>
            </div>

            <div className="location-section">
              <div className="edit-city">
                <label className="city-text">City
                  <input type="text"
                    value={this.state.city || ""}
                    onChange={this.handleChange('city')}
                    className="city"
                    />
                </label>
              </div>

            <div className="edit-country">
              <label className="country-text">Country
                <input type="text"
                  value={this.state.country || ""}
                  onChange={this.handleChange('country')}
                  className="country"
                />
              </label>
              </div>
            </div>

            <div className="edit-bio">
              <label className="bio-text">Bio
                <textarea
                  value={this.state.bio || ""}
                  onChange={this.handleChange('bio')}
                  placeholder="Tell the world a little bit about yourself. The shorter the better."
                />
              </label>
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button className="cancel-button"
            onClick={this.props.toggleModal}>Cancel</button>
          <button className="save-button"
            onClick={this.handleSubmit}>Save changes</button>
        </div>
      </form>
    );
  }
}

export default EditUserForm;
