export const fetchComments = () => (
  $.ajax({
    url: `/api/comments`,
    method: 'get'
  })
);

export const fetchComment = id => (
  $.ajax({
    url: `/api/comments/${id}`,
    method: 'get'
  })
);

export const updateComment = comment => (
  $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'patch',
    data: { comment }
  })
);

export const deleteComment = id => (
  $.ajax({
    url: `/api/comments/${id}`,
    method: 'delete'
  })
);
