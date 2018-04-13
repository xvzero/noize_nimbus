import React from 'react';

class TrackPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchTrack(this.props.match.trackUrl);
  }

  render() {
    console.log(this.props);
    return (
      <div className="track-details">

      </div>
    );
  }
}

export default TrackPage;
