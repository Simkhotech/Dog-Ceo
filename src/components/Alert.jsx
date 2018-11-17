import React from 'react';
import BooAlert from 'react-bootstrap/lib/Alert';
import PropTypes from 'prop-types';

const Alert = ({ type, head, message }) => (
  <BooAlert bsStyle={type}>
    <strong>{head}</strong> {message}
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
