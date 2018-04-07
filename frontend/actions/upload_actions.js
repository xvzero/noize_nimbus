export const RECEIVE_UPLOAD = "RECEIVE_UPLOAD";
export const UPDATE_UPLOAD = "UPDATE_UPLOAD";
export const REMOVE_UPLOAD = "REMOVE_UPLOAD";

export const receiveUpload = upload => ({
  type: RECEIVE_UPLOAD,
  upload
});

export const updateUpload = upload => ({
  type: UPDATE_UPLOAD,
  upload
});

export const removeUpload = uploadId => ({
  type: REMOVE_UPLOAD,
  uploadId
});
