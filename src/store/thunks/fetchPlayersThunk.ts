import { createAsyncThunk } from "@reduxjs/toolkit";
import { Player } from "../../utils/types";
import client from "../../api/grapqlClient";
import { GET_PLAYERS_QUERIE } from "../../api/queries";
import { ApolloError } from "@apollo/client";

export const fetchPlayersThunk = createAsyncThunk<Player[], void>(
  "players/get",
  async (_, thunkApi) => {
    try {
      const response = await client.query({
        query: GET_PLAYERS_QUERIE,
      });
      return response.data.players;
    } catch (error) {
      const rejectionError = error as ApolloError;
      return thunkApi.rejectWithValue(rejectionError.message);
    }
  }
);
