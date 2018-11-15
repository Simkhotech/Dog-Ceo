import React from 'react';
import BooAlert from 'react-bootstrap/lib/Alert';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';

const Alert = ({ type, head, message }) => (
  <BooAlert bsStyle={type}>
    <strong>{head}</strong> {message}
    <br />
    <Button
      bsStyle="primary"
      href="/"
    >
        Homepage
    </Button>
  </BooAlert>
);

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
  head: PropTypes.string,
  message: PropTypes.string,
};

Alert.defaultProps = {
  type: 'danger',
  head: 'Error:',
  message: 'Something wrong!',
};

export default Alert;
