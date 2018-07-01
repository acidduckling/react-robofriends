import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

describe('CounterButton Component', () => {
  it('expect to render the COunterButton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it('should correctly increment the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('#counter').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    wrapper.find('#counter').simulate('click');
    wrapper.find('#counter').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 });
    wrapper.find('#counter').simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 3 });

    expect(wrapper.props().color).toEqual('red');
  });
});
