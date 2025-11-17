import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface News {
  id: number;
  title: string;
  summary: string;
  url?: string;
  image_url: string;
  news_site?: string;
  published_at: string;
}

export interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: News[];
}

export interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalCount: number;
  selectedNews: News | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
  selectedNews: null,
};

// getting all news(blogs)
export const fetchNews = createAsyncThunk<
  NewsResponse,
  { limit?: number; offset?: number },
  { rejectValue: string }
>("news/fetchNews", async ({ limit = 12, offset = 0 }, { rejectWithValue }) => {
  try {
    const baseUrl = "https://api.spaceflightnewsapi.net/v4/blogs/";
    const params = new URLSearchParams();
    params.append("limit", limit.toString());
    params.append("offset", offset.toString());
    const url = `${baseUrl}?${params.toString()}`;

    const response = await fetch(url);
    console.log("Url we work out: ", url); //
    if (!response.ok) {
      throw new Error(`Response failed: ${response.status}`);
    }
    const data: NewsResponse = await response.json();
    console.log("Fetching data from API: ", data); //
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Unknown error occurred");
  }
});

// get 1 piece of news
export const fetchNewsById = createAsyncThunk<News, number, { rejectValue: string }>(
  "news/fetchNewsById",
  async (id: number, { rejectWithValue }) => {
    try {
      const url = `https://api.spaceflightnewsapi.net/v4/blogs/${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response failed: ${response.status}`);
      }
      const data: News = await response.json();
      if (!data) {
        throw new Error("Getting data from API failed");
      }
      console.log("Success: ", data); //
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Unknown error occured");
    }
  },
);

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    // page's number to render
    setCurrentPageForNews: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    // throw error
    clearErrorInNews: (state) => {
      state.error = null;
    },
    // clear state
    clearSelectedNews: (state) => {
      state.selectedNews = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.news = action.payload.results;
        state.totalCount = action.payload.count;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error while fetching data";
      })
      .addCase(fetchNewsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNewsById.fulfilled, (state, action: PayloadAction<News>) => {
        state.loading = false;
        state.error = null;
        state.selectedNews = action.payload;
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load news by id";
      });
  },
});

export const { setCurrentPageForNews, clearErrorInNews, clearSelectedNews } = newsSlice.actions;
export default newsSlice.reducer;

// selectors
// all news in a bulk
export const selectNews = (state: RootState) => state.news.news;
export const selectNewsLoading = (state: RootState) => state.news.loading;
export const selectNewsError = (state: RootState) => state.news.error;
export const selectNewsCurrentPage = (state: RootState) => state.news.currentPage;
export const selectNewsTotalCount = (state: RootState) => state.news.totalCount;

// by id
export const selectNewsById = (state: RootState) => state.news.selectedNews;
