export interface ISearchState {
  searchField: string
}

export interface IRobotsState {
  isPending: boolean,
  robots: IRobot[],
  error?: string
}

export interface IRobot {
  id: number,
  name: string,
  email: string
}

export interface IState {
  searchRobots: ISearchState,
  requestRobots: IRobotsState
}

export type CombinedProps = ISearchState & IRobotsState;

export type MainProps = CombinedProps & MainPropMethods;

export interface MainPropMethods {
  onRequestRobots(): Promise<any>;
  onSearchChange(): Promise<any>;
}