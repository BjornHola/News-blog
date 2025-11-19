import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import articlesReducer from "../../core/articlesSlice";
import newsReducer from "../../core/newsSlice";
import { SinglePostPage } from "./single-post-page";

const renderSimple = (preloadedState = {}, route = "/articles/1") => {
  const store = configureStore({
    reducer: { articles: articlesReducer, news: newsReducer },
    preloadedState,
  });

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <SinglePostPage />
      </MemoryRouter>
    </Provider>,
  );
};

describe("SinglePostPage basic", () => {
  it("renders 'Article not found' when selectedArticle is null", () => {
    renderSimple({
      articles: {
        articles: [],
        loading: false,
        error: null,
        currentPage: 1,
        totalCount: 0,
        selectedArticle: null,
        searchResults: [],
      },
    });
    expect(screen.getByText(/Article not found/)).toBeTruthy();
  });

  it("renders loader when loading is true", () => {
    renderSimple({
      articles: {
        articles: [],
        loading: true,
        error: null,
        currentPage: 1,
        totalCount: 0,
        selectedArticle: null,
        searchResults: [],
      },
    });
    expect(screen.getByText(/Loading article.../)).toBeTruthy();
  });
});
