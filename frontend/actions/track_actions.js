import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const REMOVE_TRACK_ERRORS = "REMOVE_TRACK_ERRORS";

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const removeTrack = trackId => ({
  type: REMOVE_TRACK,
  trackId
});

export const receiveErrors = (uploadId, errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  uploadId,
  errors
});

export const removeErrors = uploadId => ({
  type: REMOVE_TRACK_ERRORS,
  uploadId
});

export const fetchTracks = () => dispatch => (
  APIUtil.fetchTracks().then(
    tracks => dispatch(receiveTracks(tracks)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const fetchTrack = trackId => dispatch => (
  APIUtil.fetchTrack(trackId).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const createTrack = (trackInfo, uploadId) => dispatch => (
  APIUtil.createTrack(trackInfo).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveErrors(uploadId, errors.responseJSON)
  ))
);

export const updateTrack = trackInfo => dispatch => (
  APIUtil.updateTrack(trackInfo).then(
    track => dispatch(receiveTrack(track)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);

export const deleteTrack = trackId => dispatch => (
  APIUtil.deleteTrack(trackId).then(
    () => dispatch(removeTrack(trackId)),
    errors => dispatch(receiveErrors(errors.responseJSON)
  ))
);
