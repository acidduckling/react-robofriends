import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

describe('SearchBox Component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
