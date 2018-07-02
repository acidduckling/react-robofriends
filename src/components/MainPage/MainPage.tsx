import * as React from 'react';

import CardList from 'components/CardList/CardList';
import SearchBox from 'components/SearchBox/SearchBox';
import './MainPage.css';
import Scroll from 'components/Scroll/Scroll';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import Header from 'components/Header/Header';
import { IRobot, MainProps } from 'state';

class MainPage extends React.Component<MainProps> {
  componentDidMount(): void {
    this.props.onRequestRobots();
  }

  filterRobots = (): IRobot[] => {
    return this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render(): JSX.Element {
    const { onSearchChange, isPending } = this.props;

    if (isPending) return <h1 className="tc">Loading</h1>;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
