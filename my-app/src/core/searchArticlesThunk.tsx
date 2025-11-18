import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ArticlesResponse } from "./articlesSlice";

export const searchArticles = createAsyncThunk<
  ArticlesResponse,
  { query: string; limit?: number; offset?: number },
  { rejectValue: string }
>(
  "articles/searchArticles",
  async ({ query, limit = 12, offset = 0 }, { rejectWithValue, signal }) => {
    try {
      const url = `https://api.spaceflightnewsapi.net/v4/articles/?title_contains=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error(`Response failed: ${response.status}`);
      }
      const data: ArticlesResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return rejectWithValue("Request was cancelled");
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error!");
    }
  },
);
