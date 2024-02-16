import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerWithDetails } from "../../utils/types";
import { RootState } from "../store";

interface CombinedState {
  playersWithDetails: PlayerWithDetails[];
}

const initialState: CombinedState = {
  playersWithDetails: [],
};

const combinedSlice = createSlice({
  name: "playersWithDetails",
  initialState,
  reducers: {
    setPlayersWithDetails: (
      state,
      action: PayloadAction<PlayerWithDetails[]>
    ) => {
      state.playersWithDetails = action.payload;
    },
  },
});

export const { setPlayersWithDetails } = combinedSlice.actions;

export const getPlayersWithDetails = (state: RootState) =>
  state.playersWithDetails;

export default combinedSlice.reducer;
