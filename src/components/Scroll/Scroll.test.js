import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

describe('Scroll Component', () => {
  it('should match the snapshot', () => {
    expect(
      shallow(
        <Scroll>
          <div>Test</div>
        </Scroll>
      )
    ).toMatchSnapshot();
  });
});
