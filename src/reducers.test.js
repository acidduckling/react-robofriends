import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';
import * as actions from './actions';
import * as reducers from './reducers';

describe('search robots', () => {
  const initialState = {
    searchField: ''
  };

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_SEARCHFIELD ', () => {
    expect(
      reducers.searchRobots(initialState, {
        type: CHANGE_SEARCH_FIELD,
        payload: 'abc'
      })
    ).toEqual({
      searchField: 'abc'
    });
  });
});

describe('requestRobots', () => {
  const initialState = {
    robots: [],
    isPending: false
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_ROBOTS_PENDING action ', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action ', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'test',
            email: 'test@blah.com'
          }
        ]
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'test',
          email: 'test@blah.com'
        }
      ],
      isPending: false
    });
  });

  it('should handle REQUEST_ROBOTS_FAILED action ', () => {
    expect(
      reducers.requestRobots(initialState, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'error!'
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: 'error!'
    });
  });
});
