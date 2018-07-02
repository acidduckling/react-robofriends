import * as React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from 'actions/actions';
import MainPage from 'components/MainPage/MainPage';
import { IState, CombinedProps, MainPropMethods, MainProps } from 'state';

const mapStateToProps = (state: IState): CombinedProps => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event: Event): void => {
      dispatch(setSearchField((event.target as HTMLInputElement).value));
    },
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends React.Component<MainProps> {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
