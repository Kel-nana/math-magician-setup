import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

describe('Calculator component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with specific props', () => {
    const tree = renderer
      .create(<Calculator numberOne="5" numberTwo="3" operation="+" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
