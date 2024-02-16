import { createSlice } from "@reduxjs/toolkit";
import { Match } from "../../utils/types";
import { RootState } from "../store";
import { fetchMatchesThunk } from "../thunks/fetchMatchesThunk";

interface InitialStateType {
  matches: Match[] | null;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: InitialStateType = {
  matches: null,
  error: null,
  status: "idle",
};

export const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMatchesThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMatchesThunk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.matches = action.payload;
      })
      .addCase(fetchMatchesThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const getMatches = (state: RootState) => state.matches;

export default matchesSlice.reducer;
