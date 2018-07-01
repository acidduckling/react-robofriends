import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

describe('CardList Component', () => {
  it('should match the snapshot', () => {
    const mockRobots = [{ id: 1, name: 'John Snow', email: 'johnjohn@got.com' }];

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
  });
});
