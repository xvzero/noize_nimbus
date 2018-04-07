import React from 'react';
import merge from 'lodash/merge';
import UploadTrackForm from '../track_form/upload_track_form_container';

class UploadIndex extends React.Component {
  render() {
    return (
      <div>
        { this.props.uploads.map((upload, i) =>
            <UploadTrackForm
              key={`${upload.id}` + `${i}`}
              upload={upload}
              cancel={this.props.removeUpload}/>
            )
        }
      </div>
    );
  }
}

export default UploadIndex;
