import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router-dom';
import UploadTrackForm from '../track_form/upload_track_form_container';

class UploadIndex extends React.Component {
  render() {
    const uploads = Object.values(this.props.uploads).reverse().map(
      upload => <UploadTrackForm
                        key={upload.id}
                        upload={upload}
                        cancel={this.props.cancel}/>
    );

    return (
      <div>
        { uploads }
      </div>
    );
  }
}

export default withRouter(UploadIndex);
