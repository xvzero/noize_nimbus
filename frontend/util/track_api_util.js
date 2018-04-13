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

export const updateTrack = track => (
  $.ajax({
    url: `/api/tracks/${track.id}`,
    method: 'patch',
    contentType: false,
    processData: false,
    data: track
  })
);

export const deleteTrack = id => (
  $.ajax({
    url: `/api/tracks/${id}`,
    method: 'delete'
  })
);
