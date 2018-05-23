/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import BreedList from '../components/App';

// Important!
// I do not know JEST and I think
// it will be useful to study it.
// The tests were not so easy for
// me to learn. Need more time
describe('BreedList suite', () => {
  it('renders without crashing... so good test!', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BreedList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('404 renders correctly with snapshot', () => {
    const tree = renderer
      .create(<BreedList />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
