import React from 'react';
import Alert from './Alert';

const type = 'info';
const head = '404';
const message = 'There does not seem to be a page here';

const PageNotFound = () => (
  <Alert type={type} head={head} message={message} />
);

export default PageNotFound;
