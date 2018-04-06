import React from 'react';
import UploadIndex from './upload_index';
import merge from 'lodash/merge';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploads: {}
    };

    this.handleAddFile = this.handleAddFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(id) {
    const uploads = this.state.uploads;
    delete uploads[id];
    this.setState({ uploads });
  }

  handleAddFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = function () {
      const defaultTitle = file.name
        .match(/([^/\\]+)(\.[^/\\]+?)?/)[0]
        .replace(/[^a-zA-Z0-9 ]/g, "-");
      const id = new Date().valueOf();
      const uploadItem = {
        [id]: {
          id: id,
          title: defaultTitle,
          track_url: defaultTitle,
          track_file: file
        }
      };

      this.setState({
        uploads: merge(this.state.uploads, uploadItem)
      });
    }.bind(this);

    if (file) fileReader.readAsDataURL(file);
  }

  render() {
    return (
      <div>
        <div className="file-chooser">
          <header className="upload-header">Upload to NoizeNimbus</header>
          <label>Choose a file to upload
            <input type="file"
              onChange={this.handleAddFile}
              className="upload-file-button"
              style={{display: "none"}}/>
          </label>
        </div>

        <UploadIndex uploads={this.state.uploads} cancel={this.handleCancel}/>
      </div>
    );
  }
}

export default Upload;
