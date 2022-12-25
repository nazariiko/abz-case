const getToken = () => {
  return new Promise((resolve, reject) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((response) => response.json())
      .then((data) => resolve(data.token))
      .catch((error) => reject(error));
  });
};

export const postUser = (user) => {
  return new Promise(async (resolve, reject) => {
    const token = await getToken();
    const formData = new FormData();
    formData.append('position_id', user.position);
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('phone', user.phone);
    formData.append('photo', user.imageFile);

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      body: formData,
      headers: { Token: token },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch((error) => reject(error));
  });
};
