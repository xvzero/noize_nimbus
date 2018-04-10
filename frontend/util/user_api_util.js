export const fetchUsers = () => (
  $.ajax({
    url: `/api/users`,
    method: 'get'
  })
);

export const fetchUser = id => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'get'
  })
);

export const updateUser = user => (
  $.ajax({
    url: `/api/users/${user.id}`,
    method: 'post',
    data: { user }
  })
);

export const deleteUser = id => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'delete'
  })
);
