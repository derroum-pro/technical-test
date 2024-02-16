import { getTimePlayed } from "./helpers";
import { Match } from "./types";

describe("getTimePlayed Function", () => {
  it("calculates total time played for a player with multiple matches", () => {
    const matches: Match[] = [
      {
        id: "first",
        winner: { id: "player1" },
        startTime: "2024-02-15T10:00:00Z",
        endTime: "2024-02-15T12:00:00Z",
        players: [{ id: "player1" }, { id: "player2" }],
      },
      {
        id: "second",
        winner: { id: "player2" },
        startTime: "2024-02-15T18:00:00Z",
        endTime: "2024-02-15T18:30:00Z",
        players: [{ id: "player1" }, { id: "player2" }],
      },
    ];

    const playerId = "player1";

    const result = getTimePlayed(matches, playerId);

    expect(result).toBe(2.5 * 60 * 60);
  });

  it("returns 0 when there are no matches for the player", () => {
    const matches = [
      {
        id: "first",
        winner: { id: "player1" },
        startTime: "2024-02-15T10:00:00Z",
        endTime: "2024-02-15T12:00:00Z",
        players: [{ id: "player2" }, { id: "player3" }],
      },
      {
        id: "second",
        winner: { id: "player1" },
        startTime: "2024-02-15T14:00:00Z",
        endTime: "2024-02-15T16:30:00Z",
        players: [{ id: "player4" }, { id: "player5" }],
      },
    ];

    const playerId = "player1";

    const result = getTimePlayed(matches, playerId);

    expect(result).toBe(0);
  });

  it("calculates total time played for a player with a single match", () => {
    const matches = [
      {
        id: "first",
        winner: { id: "player1" },
        startTime: "2024-02-15T10:00:00Z",
        endTime: "2024-02-15T12:30:00Z",
        players: [{ id: "player1" }, { id: "player2" }],
      },
    ];

    const playerId = "player1";

    const result = getTimePlayed(matches, playerId);

    expect(result).toBe(2.5 * 60 * 60);
  });
});
