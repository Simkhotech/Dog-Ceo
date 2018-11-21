import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import Alert from '../Alert/Alert';

const Page404 = ({ type, head, message }) => (
  <React.Fragment>
    <Alert type={type} head={head} message={message} />
    <Button
      bsStyle="primary"
      href="/"
    >
      Back Home
    </Button>
  </React.Fragment>
);

Page404.propTypes = {
  type: PropTypes.string,
  head: PropTypes.string,
  message: PropTypes.string,
};

Page404.defaultProps = {
  type: 'info',
  head: '404',
  message: 'There does not seem to be a page here',
};

export default Page404;
