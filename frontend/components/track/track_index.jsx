import React from 'react';
import TrackItemContainer from './track_item_container';

class TrackIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTracks();
  }

  renderTracks() {
    let tracks = [];
    if (this.props.tracks !== undefined) {
      tracks = Object.values(this.props.tracks);
    }
    return (
      <ul className="track-item">
        {tracks.map((track, number) => (
          <li key={`track-${number}`}><TrackItemContainer track={track}/></li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="track-index">
        { this.renderTracks() }
      </div>
    );
  }
}

export default TrackIndex;
