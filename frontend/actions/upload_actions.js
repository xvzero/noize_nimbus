import * as APIUtil from '../util/upload_api_util';

export const RECEIVE_UPLOADS = "RECEIVE_UPLOADS";
export const RECEIVE_UPLOAD = "RECEIVE_UPLOAD";
export const REMOVE_UPLOAD = "REMOVE_UPLOAD";

export const receiveUploads = uploads => ({
  type: RECEIVE_UPLOADS,
  uploads
});

export const receiveUpload = upload => ({
  type: RECEIVE_UPLOAD,
  upload
});

export const removeUpload = uploadId => ({
  type: REMOVE_UPLOAD,
  uploadId
});

export const fetchUploads = () => dispatch => (
  APIUtil.fetchUploads().then(
    uploads => dispatch(receiveUploads(uploads))
  )
);

export const createUpload = uploadInfo => dispatch => (
  APIUtil.createUpload(uploadInfo).then(
    track => dispatch(receiveUpload(track))
  )
);

export const deleteUpload = uploadId => dispatch => (
  APIUtil.deleteUpload(uploadId).then(
    () => dispatch(removeUpload(uploadId))
  )
);
