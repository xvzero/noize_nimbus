import React from 'react';
// import Comment from './comment';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComments();
  }

  render() {
    return (
      <div className="comments-container">
        <div className="comment-input-section">
          <div className="comment-input-container">
            <div className="current-user-profile-img">
            </div>
            <div className="comment-input-text">
              <input type="text"
                value={this.state.comment}
                onChange={this.handleChange}
                className="comment-input"
              />
            </div>
          </div>
          <div className="track-options">
            <div className="track-actions">
            </div>
            <div className="track-stats">
            </div>
          </div>
        </div>

        <div className="main-comment-area">
          <div className="track-artist-details">
          </div>

          <div className="track-details">
            <div className="track-description">
            </div>
            <div className="comments-list">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentIndex;
