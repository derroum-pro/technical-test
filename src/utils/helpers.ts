import { Match, Player, PlayerWithDetails } from "./types";

export const getTimePlayed = (matches: Match[], playerId: string) => {
  let playerMatches = matches.filter((match) =>
    match.players.some((matchPlayer) => matchPlayer.id === playerId)
  );
  return (
    playerMatches.reduce((acc, curr) => {
      const startTime = new Date(curr.startTime).getTime();
      const endTime = new Date(curr.endTime).getTime();
      const differenceInMilliSeconds = endTime - startTime;
      return (acc += differenceInMilliSeconds);
    }, 0) / 1000
  );
};

export const associateMatchesWithPlayers = (
  players: Player[],
  matches: Match[]
): PlayerWithDetails[] => {
  return players.map((player) => ({
    ...player,
    wins: matches.filter(
      (match) =>
        match.players.some((matchPlayer) => matchPlayer.id === player.id) &&
        match.winner.id === player.id
    ),
    loses: matches.filter(
      (match) =>
        match.players.some((matchPlayer) => matchPlayer.id === player.id) &&
        match.winner.id !== player.id
    ),
    timePlayed: getTimePlayed(matches, player.id),
  }));
};
