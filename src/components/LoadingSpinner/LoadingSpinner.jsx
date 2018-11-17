import React from 'react';
import { RingLoader } from 'react-spinners';

export default class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const color = '#123abc';
    return (
      <RingLoader
        color={color}
        loading={this.state.loading}
      />
    );
  }
}
