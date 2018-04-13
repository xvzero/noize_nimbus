export const fetchTracks = () => (
  $.ajax({
    url: `/api/tracks`,
    method: 'get'
  })
);

export const fetchTrack = id => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: 'get'
  })
);

export const createTrack = track => (
  $.ajax({
    url: `/api/tracks`,
    method: 'post',
    contentType: false,
    processData: false,
    data: track
  })
);

export const updateTrack = trackData => (
  $.ajax({
    url: `/api/tracks/${trackData.get('track[id]')}`,
    method: 'patch',
    contentType: false,
    processData: false,
    data: trackData
  })
);

export const deleteTrack = id => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: 'delete'
  })
);
