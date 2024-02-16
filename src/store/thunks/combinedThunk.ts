import { AppThunk } from "../store";
import { Match, Player } from "../../utils/types";
import { associateMatchesWithPlayers } from "../../utils/helpers";
import { fetchPlayersThunk } from "./fetchPlayersThunk";
import { fetchMatchesThunk } from "./fetchMatchesThunk";

export const fetchPlayersAndMatches = (): AppThunk => async (dispatch) => {
  try {
    const [playersAction, matchesAction] = await Promise.all([
      dispatch(fetchPlayersThunk()),
      dispatch(fetchMatchesThunk()),
    ]);

    const players = playersAction.payload as Player[];
    const matches = matchesAction.payload as Match[];

    const playersWithMatchDetails = associateMatchesWithPlayers(
      players,
      matches
    );

    dispatch({
      type: "playersWithDetails/setPlayersWithDetails",
      payload: playersWithMatchDetails,
    });
  } catch (error) {
    console.error("Error fetching players and matches:", error);
  }
};
