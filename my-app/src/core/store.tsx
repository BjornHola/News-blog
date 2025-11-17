import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./articlesSlice";
import newsReducer from "./newsSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
