export const fetchUploads = () => (
  $.ajax({
    url: `/api/uploads`,
    method: 'get'
  })
);

export const createUpload = upload => (
  $.ajax({
    url: `/api/uploads`,
    method: 'post',
    data: { upload }
  })
);

export const removeUpload = uploadId => (
  $.ajax({
    url: `/api/uploads/${uploadId}`,
    method: 'get'
  })
);
