import { useEffect, useState, type FC } from "react";
import { Header } from "../../layout/header/index-header";
import { ResultsBlock, WrapperForSearchPage } from "./search-page-styles";
import { Title } from "../../components/common/Titles/title-index";
import {
  ErrorContainer,
  ErrorMessage,
  PageInfo,
  PaginationButton,
  PaginationWrapper,
  RetryButton,
} from "../mainPage/main-page-styles";
import { Footer } from "../../layout/footer/index-footer";
import { Link, useParams } from "react-router-dom";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/storehooks";
import { searchArticles } from "../../core/searchArticlesThunk";
import {
  selectSearchNews,
  selectSearchLoading as selectSearchLoadingNews,
  selectSearchError as selectSearchErrorNews,
  clearSearchNews,
} from "../../core/newsSlice";
import {
  clearSearchArticle,
  selectSearchArticles,
  selectSearchArticlesError,
  selectSearchArticlesLoading,
} from "../../core/articlesSlice";
import { searchNews } from "../../core/searchNewsThunk";

export const SearchPage: FC = () => {
  // max page's number of the page for pagination + quantity of posts to render
  const maxPage = 3;
  const pageLimit = 12;

  const dispatch = useAppDispatch();

  // validate type of tabLabel
  function toActiveTabLabel(label: unknown): "articles" | "news" {
    return label === "news" ? "news" : "articles";
  }
  // choose the tab where to search
  const { searchValue = "", tabLabel } = useParams<{
    searchValue?: string;
    tabLabel?: string;
  }>();
  const activeTabLabel = toActiveTabLabel(tabLabel);

  // choose type of search - amongst articles / news
  const isArticles = tabLabel === "articles";
  const results = useAppSelector(isArticles ? selectSearchArticles : selectSearchNews) || [];
  const loading = useAppSelector(
    isArticles ? selectSearchArticlesLoading : selectSearchLoadingNews,
  );
  const error = useAppSelector(isArticles ? selectSearchArticlesError : selectSearchErrorNews);

  //active page in pagination
  const [currentPage, setCurrentPage] = useState(1);

  //reset current page before new search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, tabLabel]);

  // dispatch search anytime when deps changed, cleaning and show results
  useEffect(() => {
    if (!searchValue) return;
    if (isArticles) {
      dispatch(
        searchArticles({
          query: searchValue,
          limit: pageLimit,
          offset: (currentPage - 1) * pageLimit,
        }),
      );
    } else {
      dispatch(
        searchNews({ query: searchValue, limit: pageLimit, offset: (currentPage - 1) * pageLimit }),
      );
    }
    return () => {
      if (isArticles) dispatch(clearSearchArticle());
      else dispatch(clearSearchNews());
    };
  }, [searchValue, isArticles, currentPage, dispatch]);

  // retry block
  const handleRetry = () => {
    if (isArticles) dispatch(clearSearchArticle());
    else dispatch(clearSearchNews());
    if (searchValue) {
      if (isArticles) {
        dispatch(
          searchArticles({
            query: searchValue,
            limit: pageLimit,
            offset: (currentPage - 1) * pageLimit,
          }),
        );
      } else {
        dispatch(
          searchNews({
            query: searchValue,
            limit: pageLimit,
            offset: (currentPage - 1) * pageLimit,
          }),
        );
      }
    }
  };

  //pagination(change pages)
  const handlePageChange = (newPage: number) => setCurrentPage(newPage);

  return (
    <WrapperForSearchPage>
      <Header isAuth={false} activeTabLabel={activeTabLabel} />
      <Title content={`Search results: ${searchValue}`} />
      {loading && <div>Loading...</div>}
      {error && (
        <ErrorContainer>
          <ErrorMessage>⚠️{error}</ErrorMessage>
          <RetryButton onClick={handleRetry}>Try Again</RetryButton>
        </ErrorContainer>
      )}
      {!loading && !error && Array.isArray(results) && results.length === 0 && (
        <ErrorMessage>Nothing was found on your search request</ErrorMessage>
      )}
      <ResultsBlock>
        {results.map((post) => (
          <Link to={`/${tabLabel}/${post.id}`} key={post.id}>
            <PostCardMedium
              post={{
                image: post.image_url,
                date: new Date(post.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }),
                title: post.title || "Default title",
              }}
            />
          </Link>
        ))}
      </ResultsBlock>
      <PaginationWrapper>
        <PaginationButton
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </PaginationButton>
        <PageInfo>
          Page {currentPage} of {maxPage}
        </PageInfo>
        <PaginationButton
          onClick={() => handlePageChange(Math.min(currentPage + 1, maxPage))}
          disabled={currentPage >= maxPage}
        >
          Next
        </PaginationButton>
      </PaginationWrapper>
      <Footer />
    </WrapperForSearchPage>
  );
};
