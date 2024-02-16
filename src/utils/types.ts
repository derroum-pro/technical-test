export type Picture = {
  url: string;
};

export type Country = {
  picture: Picture;
  code: string;
};

export type Sex = "MAN" | "WOMAN";

export type Stats = {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
};

export interface Player {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: Sex;
  picture: Picture;
  country: Country;
  stats: Stats;
}

export interface PlayerWithDetails extends Player {
  timePlayed: number;
  wins: Partial<Match>[];
  loses: Partial<Match>[];
}

export interface Match {
  id: string;
  players: Partial<Player>[];
  winner: Partial<Player>;
  startTime: string;
  endTime: string;
}

export interface Query {
  players: Player[];
  matches: Match[];
}
