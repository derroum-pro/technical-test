import { createAsyncThunk } from "@reduxjs/toolkit";
import { Match } from "../../utils/types";
import client from "../../api/grapqlClient";
import { GET_MATCHES_QUERY } from "../../api/queries";
import { ApolloError } from "@apollo/client";

export const fetchMatchesThunk = createAsyncThunk<Match[], void>(
  "matches/get",
  async (_, thunkApi) => {
    try {
      const response = await client.query({
        query: GET_MATCHES_QUERY,
      });
      return response.data.matches;
    } catch (error) {
      const rejectionError = error as ApolloError;
      return thunkApi.rejectWithValue(rejectionError.message);
    }
  }
);
