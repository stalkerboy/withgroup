const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.nodebird.com'
    : 'http://52.79.57.173';

export {backUrl};
