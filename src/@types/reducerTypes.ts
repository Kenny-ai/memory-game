export interface PlayerDetailsType {
  id: number;
  mobileName: string;
  desktopName: string;
  score: number;
  turn: number;
}
export interface initialStateType {
  playerDetails: PlayerDetailsType[];
}

export interface Actions {
  type: string;
  payload?: any;
}
