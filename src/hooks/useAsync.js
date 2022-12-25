import React from 'react';

export const useAsync = (asyncCallback, params, deps) => {
  const [status, setStatus] = React.useState('idle');
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  const main = (params) => {
    setStatus('pending');
    asyncCallback
      .call(this, ...params)
      .then((result) => {
        setData(result);
        setStatus('success');
      })
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  };

  React.useEffect(() => {
    main(params);
  }, deps);

  const refreshAsyncCallback = (params) => {
    main(params);
  };

  return { status, data, error, refreshAsyncCallback };
};
