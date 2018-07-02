import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import MainPage from './MainPage';

/** @type {ShallowWrapper} */
let wrapper;
let mockProps;

beforeEach(() => {
  mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@blah.com'
      }
    ],
    searchField: '',
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

describe('MainPage Container', () => {
  it('Renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is pending view', () => {
    mockProps.isPending = true;
    const wrapper = shallow(<MainPage {...mockProps} />);

    expect(wrapper).toMatchSnapshot('mainpage-ispending');
  });

  it('Filters robots correctly', () => {
    expect(wrapper.instance().filterRobots()).toEqual(mockProps.robots);
  });

  it('Filters robots correctly 2', () => {
    mockProps.searchField = 'a';
    const wrapper = shallow(<MainPage {...mockProps} />);

    expect(wrapper.instance().filterRobots()).toEqual([]);
  });
});
