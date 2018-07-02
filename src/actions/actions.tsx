import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants';
import { apiCall } from '../api/api';
import { IRobot } from 'state';

export interface IAction {
  type: string;
  payload?: object | string;
}

export const setSearchField = (text: string): IAction => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => (dispatch: (action: IAction) => any) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then((data: IRobot[]) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error: string) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
