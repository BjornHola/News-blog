import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// 1 article type
interface Article {
  id: number;
  title: string;
  summary: string;
  url: string;
  image_url: string;
  news_site: string;
  published_at: string;
}

// api data - response
interface ArticlesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}

// state
interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalCount: number;
}

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
};

export const fetchArticles = createAsyncThunk<
  ArticlesResponse,
  { limit?: number; offset?: number },
  { rejectValue: string }
>("articles/fetchArticles", async ({ limit = 12, offset = 0 }, { rejectWithValue }) => {
  try {
    const baseUrl = "https://api.spaceflightnewsapi.net/v4/articles/";
    const params = new URLSearchParams();
    params.append("limit", limit.toString());
    params.append("offset", offset.toString());
    const url = `${baseUrl}?${params.toString()}`;

    console.log("Url we work out: ", url); //

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response failed: ${response.status}`);
    }
    const data: ArticlesResponse = await response.json();
    console.log("Fetching data from API: ", data); //
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error occurred");
  }
});

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    // page number
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // throw error
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.articles = action.payload.results;
        state.totalCount = action.payload.count;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error while fetching data";
      });
  },
});

export const { setCurrentPage, clearError } = articlesSlice.actions;
export default articlesSlice.reducer;

// selectors
export const selectArticles = (state: RootState) => state.articles.articles;
export const selectLoading = (state: RootState) => state.articles.loading;
export const selectError = (state: RootState) => state.articles.error;
export const selectCurrentPage = (state: RootState) => state.articles.currentPage;
export const selectTotalCount = (state: RootState) => state.articles.totalCount;
