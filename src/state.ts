export interface ISearchState {
  searchField: string
}

export interface IRobotsState {
  isPending: boolean,
  robots: IRobot[]
}

export interface IRobot {
  id: number,
  name: string,
  email: string
}