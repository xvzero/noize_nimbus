import React from 'react';
import CommentIndexContainer from '../comment/comment_index_container';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTrack(this.props.match.trackUrl);
  }

  render() {
    return (
      <div className="track-page">

        <div className="comment-input-container">
        </div>

        <CommentIndexContainer />
      </div>
    );
  }
}

export default TrackPage;
