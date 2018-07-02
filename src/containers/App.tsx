import { requestRobots, setSearchField } from 'actions/actions';
import MainPage from 'components/MainPage/MainPage';
import * as React from 'react';
import { connect } from 'react-redux';
import { CombinedProps, IState, MainPropMethods, MainProps } from 'state';

const mapStateToProps = (state: IState): CombinedProps => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch): MainPropMethods => {
  return {
    onSearchChange: event => {
      dispatch(setSearchField((event.target as HTMLInputElement).value));
    },
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends React.Component<MainProps> {
  render(): JSX.Element {
    return <MainPage {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
