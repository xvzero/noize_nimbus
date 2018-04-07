import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      description: "",
      update: true
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        track_img_url: fileReader.result,
        track_img_file: file,
      });
    };

    if (file) fileReader.readAsDataURL(file);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleCancel(e) {
    e.preventDefault();
    const answer = confirm("Are you sure you want to stop your upload? Any unsaved changes will be lost.");
    if (answer === true) {
      this.setState({
        update: false
      }, () => this.props.cancel(this.props.upload.track_file.name));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('track[author_id]', this.props.currentUser.id);
    formData.append('track[title]', this.state.title);
    formData.append('track[genre]', this.state.genre);
    formData.append('track[description]', this.state.description);
    formData.append('track[track_img_file]', this.state.track_img_file);
    formData.append('track[track_url]', this.state.track_url);
    formData.append('track[track_file]', this.state.track_file);
    this.props.processForm(formData)
      .then(() => this.setState({update: false}))
      .then(() => this.props.removeUpload(this.state.id));
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, number) => (
          <li key={`error-${number}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillMount() {
    this.setState(merge({}, this.state, this.props.upload));
  }

  componentWillUnmount() {
    if (this.state.update) this.props.updateUpload(this.state);
  }

  render() {
    return (
      <div className="track-info">
        <form className="track-form">
          <header>Basic info</header>
          <div className="track-img">
            <label>Update image
              <input type="file"
                accept="image/*"
                onChange={this.handleImageChange}
                className="img-chooser-button"
                style={{display: "none"}}/>
            </label>
          </div>
          <label className="track-title">Title
            <input type="text"
              value={this.state.title}
              onChange={this.handleChange('title')}
            />
          </label>
          <label className="track-url">
            {`noize-nimbus.herokuapp.com/${this.props.currentUser.profile_url}/ `}
            <input type="text"
              value={this.state.track_url}
              onChange={this.handleChange('track_url')}
            />
          </label>
          <label className="track-genre">Genre
            <input type="text"
              value={this.state.genre}
              onChange={this.handleChange('genre')}
            />
          </label>
          <label className="track-description">Description
            <textarea
              value={this.state.description}
              onChange={this.handleChange('description')}
            />
          </label>
          <div className="track-submit">
            <button className="cancel-button"
              onClick={this.handleCancel}>Cancel</button>
            <button className="save-button"
              onClick={this.handleSubmit}>Save</button>
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(TrackForm);
