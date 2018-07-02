import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('should match the snapshot', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
