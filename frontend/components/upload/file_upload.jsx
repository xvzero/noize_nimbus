import React from 'react';
import merge from 'lodash/merge';
import UploadIndexContainer from './upload_index_container';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddFile = this.handleAddFile.bind(this);
  }

  handleAddFile(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const defaultTitle = file.name
        .match(/([^/\\]+)(\.[^/\\]+?)?/)[0]
        .replace(/[^a-zA-Z0-9 ]/g, "-");
      const upload = {
        id: new Date().valueOf(),
        title: defaultTitle,
        track_url: defaultTitle,
        track_file: file
      };

      this.props.createUpload(upload);
    };

    if (file) fileReader.readAsDataURL(file);
    e.target.value = null;
  }

  render() {
    return (
      <div>
        <div className="file-chooser">
          <header className="upload-header">Upload to NoizeNimbus</header>
          <label>Choose a file to upload
            <input type="file"
              ref="nofile"
              onChange={this.handleAddFile}
              className="upload-file-button"
              style={{display: "none"}}/>
          </label>
        </div>

        <UploadIndexContainer />
      </div>
    );
  }
}

export default FileUpload;
