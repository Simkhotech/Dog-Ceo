import React from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';
import Panel from 'react-bootstrap/lib/Panel';

import Alert from '../Alert/Alert';

export default class BreedListPage extends React.Component {
  componentDidMount() {
    this.props.getBreedList();
  }

  render() {
    const {
      breedList,
      hasError,
      message,
    } = this.props;
    const title = 'Choose a breed of dog...';

    function getDogPageUrl(selected) {
      return `/dog/${selected.breed}${selected.subBreed ? `/${selected.subBreed}` : ''}`;
    }

    if (hasError) {
      return (<Alert message={message} />);
    }

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{title}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>

          <Typeahead
            onChange={(selected) => {
              if (selected.length > 0) {
                window.location = getDogPageUrl(selected[0]);
              }
            }}
            options={breedList}
          />

        </Panel.Body>
      </Panel>
    );
  }
}

BreedListPage.propTypes = {
  getBreedList: PropTypes.func.isRequired,
  breedList: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasError: PropTypes.bool,
  message: PropTypes.string,
};

BreedListPage.defaultProps = {
  hasError: false,
  message: null,
};
