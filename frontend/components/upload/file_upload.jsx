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
    const noUploads = (Object.keys(this.props.uploads).length === 0);
    const disabled = this.props.currentUser ? false : true;
    return (
      <div className="file-upload-container">
        {noUploads &&
          <div className="no-file-background"></div>
        }
        <div className={"file-chooser" + (noUploads ? "" : " chooser-active")}>
          <header className={"upload-header" + (noUploads ? "" : " header-active")}>Upload to NoizeNimbus</header>
          <label className={"file-label" + (noUploads ? "" : " label-active")}
            >Choose a file to upload
            <input type="file"
              ref="nofile"
              onChange={this.handleAddFile}
              className="upload-file-button"
              style={{display: "none"}}
              multiple
              disabled={disabled}
              />
          </label>
        </div>

        <UploadIndexContainer />
      </div>
    );
  }
}

export default FileUpload;
