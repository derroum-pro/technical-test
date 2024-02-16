import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import players from "./slices/playersSlice";
import matches from "./slices/matchesSlice";
import combined from "./slices/combinedSlice";
import { fetchPlayersAndMatches } from "./thunks/combinedThunk";

const store = configureStore({
  reducer: {
    players: players,
    matches: matches,
    playersWithDetails: combined,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const combinedThunks = {
  fetchPlayersAndMatches: fetchPlayersAndMatches,
};
