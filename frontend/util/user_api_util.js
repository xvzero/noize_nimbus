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

export const updateUser = userData => (
  $.ajax({
    url: `/api/users/${userData.get('user[id]')}`,
    method: 'patch',
    contentType: false,
    processData: false,
    data: userData
  })
);

export const deleteUser = id => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'delete'
  })
);
