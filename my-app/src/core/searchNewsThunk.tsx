import { createAsyncThunk } from "@reduxjs/toolkit";
import type { NewsResponse } from "./newsSlice";

export const searchNews = createAsyncThunk<
  NewsResponse,
  { query: string; limit?: number; offset?: number },
  { rejectValue: string }
>("news/searchNews", async ({ query, limit = 12, offset = 0 }, { rejectWithValue, signal }) => {
  try {
    const url = `https://api.spaceflightnewsapi.net/v4/blogs/?title_contains=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error(`Response failed: ${response.status}`);
    const data: NewsResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      return rejectWithValue("Request was cancelled");
    }
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error occurred");
  }
});
