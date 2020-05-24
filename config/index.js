const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.nodebird.com'
    : 'http://49.50.173.236';

export {backUrl};
