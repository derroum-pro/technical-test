import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../../utils/types";
import { RootState } from "../store";
import { fetchPlayersThunk } from "../thunks/fetchPlayersThunk";

interface InitialStateType {
  players: Player[] | null;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: InitialStateType = {
  players: null,
  error: null,
  status: "idle",
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayersThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlayersThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.players = action.payload;
      })
      .addCase(fetchPlayersThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const getPlayers = (state: RootState) => state.players;

export default playersSlice.reducer;
