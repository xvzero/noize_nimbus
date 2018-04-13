import React from 'react';
import TrackIndexContainer from '../track/track_index_container';

const StreamPage = () => (
  <div className="stream-page">
    <div className="stream-tabs">
      <header className="stream-header">Most recent song uploads</header>
    </div>
    <TrackIndexContainer />
  </div>
);

export default StreamPage;
