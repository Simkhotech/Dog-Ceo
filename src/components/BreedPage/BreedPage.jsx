import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Page404 from '../Page404/Page404';

export default class BreedPage extends React.Component {
  componentDidMount() {
    const { breed, subBreed } = this.props.match.params;
    this.props.getBreedRandomImage(breed, subBreed);
  }

  render() {
    const {
      getBreedRandomImage,
      image,
      label,
      hasError,
      message,
    } = this.props;

    const {
      breed,
      subBreed,
    } = this.props.match.params;

    if (hasError === null) return (<LoadingSpinner />);
    if (hasError) return (<Page404 message={message} />);

    return (
      <React.Fragment>
        <Button
          ref={(button) => { this.button = button; }}
          bsStyle="primary"
          onClick={() => getBreedRandomImage(breed, subBreed)}
        >
          <h3>{label.toUpperCase()}</h3>
          <Image
            src={image}
            thumbnail
          />
        </Button>
      </React.Fragment>
    );
  }
}

BreedPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      breed: PropTypes.string.isRequired,
      subBreed: PropTypes.string,
    }).isRequired,
  }).isRequired,
  getBreedRandomImage: PropTypes.func.isRequired,
  image: PropTypes.string,
  label: PropTypes.string,
  hasError: PropTypes.bool,
  message: PropTypes.string,
};

BreedPage.defaultProps = {
  label: '',
  image: '',
  hasError: false,
  message: null,
};
