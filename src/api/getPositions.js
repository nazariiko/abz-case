export const getPositions = () => {
  return new Promise((resolve, reject) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
