import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Component', () => {
  it('should match the snapshot', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
