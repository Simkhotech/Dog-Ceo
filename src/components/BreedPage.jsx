import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

import Alert from './Alert';

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

    const title = `Nice dog - ${label}`;
    const description = 'Dog lowers uploaded pictures of different sizes, so this block jumps in size. But it is not problem. We can fix it later (if needed)';

    if (hasError) {
      return (<Alert message={message} />);
    }

    return (
      <Col xs={6} md={4}>

        <Thumbnail
          src={image}
          alt="dog pic"
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <Button
              bsStyle="primary"
              onClick={() => getBreedRandomImage(breed, subBreed)}
            >
              Get other picture
            </Button>
          </p>
        </Thumbnail>
      </Col>
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
