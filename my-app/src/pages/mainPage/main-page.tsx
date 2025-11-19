import { useEffect, useState, type FC } from "react";
import { Header } from "../../layout/header/index-header";
import {
  WrapperForMainPage,
  WrapperForTitleTabs,
  SectionButtonSort,
  ButtonBlock,
  SelectBlock,
  NewsBlock,
  ErrorContainer,
  ErrorMessage,
  RetryButton,
  PaginationWrapper,
  PaginationButton,
  PageInfo,
} from "./main-page-styles";
import { Title } from "../../components/common/Titles/title-index";
import { Tab } from "../../components/common/tabs/tabs-index";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import { Footer } from "../../layout/footer/index-footer";
import { SortButton } from "../../components/common/SortButtons/index.-sortButtons";
import { CustomDropdown } from "../../components/common/Select/index-select";
import { SelectItems, type SortType } from "../../components/common/Select/constants";
import { useIsMobile } from "../../utils/hooks/resizeWindow";
import { sortButtonItems } from "../../components/common/SortButtons/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/storehooks";
import {
  clearError,
  fetchArticles,
  selectArticles,
  selectError,
  selectLoading,
  type Article,
} from "../../core/articlesSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clearErrorInNews,
  fetchNews,
  selectNews,
  selectNewsError,
  selectNewsLoading,
  type News,
} from "../../core/newsSlice";

export const MainPage: FC = () => {
  // select + buttons -sort/filter
  const [currentValue, setCurrentValue] = useState(SelectItems[0]); // "Title: A-Z"
  const [sortValue, setSortValue] = useState(sortButtonItems[0]);
  // sort-buttons
  const handleSortChange = (idx: number) => {
    setSortValue(sortButtonItems[idx]);
  };
  //mobile state up to 768 =>  search UI
  const isMobile = useIsMobile(768);
  // state - number of the page to render (pagination)
  const [articlesPage, setArticlesPage] = useState(1);
  const [newsPage, setNewsPage] = useState(1);

  // max number of the page
  const maxArticlesPage = 3;
  const maxNewsPage = 3;

  // navigation over tabs - extract from params ans define active tab
  const labels = ["articles", "news"];
  const { tabLabel } = useParams<{ tabLabel: string }>();

  //define active tab to provide search and throw props to header(?)
  function toActiveTabLabel(label: unknown): "articles" | "news" {
    return label === "news" ? "news" : "articles";
  }
  const activeTabLabelFromTabsOrUrl: "articles" | "news" = toActiveTabLabel(tabLabel);
  const activeTabIndex = labels.indexOf(activeTabLabelFromTabsOrUrl);

  const navigate = useNavigate();

  // store
  // get all articles
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  // get all news
  const news = useAppSelector(selectNews);
  const newsLoading = useAppSelector(selectNewsLoading);
  const newsError = useAppSelector(selectNewsError);

  //dispatch
  useEffect(() => {
    if (activeTabIndex === 0) {
      dispatch(fetchArticles({ limit: 12, offset: (articlesPage - 1) * 12 }));
    } else if (activeTabIndex === 1) {
      dispatch(fetchNews({ limit: 12, offset: (newsPage - 1) * 12 }));
    }
  }, [activeTabIndex, dispatch, articlesPage, newsPage]);

  // articles - retry
  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchArticles({ limit: 12, offset: 0 }));
  };
  // news - retry
  const handleNewsRetry = () => {
    dispatch(clearErrorInNews());
    dispatch(fetchNews({ limit: 12, offset: 0 }));
  };

  //sorting by headline
  function sortByTitle(arr: Array<News> | Array<Article>, sortType: SortType) {
    const copy = Array.isArray(arr) ? [...arr] : [];
    if (sortType === "Title: Z-A")
      return copy.sort((a, b) =>
        (b.title || "").localeCompare(a.title || "", "en", { ignorePunctuation: true }),
      );
    if (sortType === "Title: A-Z")
      return copy.sort((a, b) =>
        (a.title || "").localeCompare(b.title || "", "en", { ignorePunctuation: true }),
      );
    return copy;
  }

  const sortedArticles = sortByTitle(articles, currentValue as SortType);
  console.log(sortedArticles.map((a) => a.title)); //
  const sortedNews = sortByTitle(news, currentValue as SortType);

  // articles
  if (loading) {
    return (
      <div style={{ color: "black", display: "block", margin: "0 auto" }}>Loading articles...</div>
    );
  }

  if (error) {
    return (
      <ErrorContainer style={{ color: "black", display: "flex", margin: "0 auto" }}>
        <ErrorMessage>⚠️ {error}</ErrorMessage>
        <RetryButton onClick={handleRetry}>Try Again</RetryButton>
      </ErrorContainer>
    );
  }
  // news
  if (newsLoading) {
    return (
      <div style={{ color: "black", display: "block", margin: "0 auto" }}>Loading news...</div>
    );
  }
  if (newsError) {
    return (
      <ErrorContainer style={{ color: "black", display: "flex", margin: "0 auto" }}>
        <ErrorMessage>⚠️ {newsError}</ErrorMessage>
        <RetryButton onClick={handleNewsRetry}>Try Again</RetryButton>
      </ErrorContainer>
    );
  }

  return (
    <WrapperForMainPage>
      <Header isAuth={false} activeTabLabel={activeTabLabelFromTabsOrUrl} />
      <WrapperForTitleTabs>
        <Title content="My Blog" />
        <Tab
          labels={["Articles", "News"]}
          state="default"
          onTabChange={(index) => navigate(`/myBlogs/tab/${labels[index].toLowerCase()}`)}
          activeIndex={activeTabIndex}
        />
      </WrapperForTitleTabs>
      <SectionButtonSort>
        {isMobile ? (
          <SelectBlock>
            <CustomDropdown
              options={sortButtonItems}
              value={sortValue}
              onChange={handleSortChange}
            />
          </SelectBlock>
        ) : (
          <ButtonBlock>
            <SortButton labels={sortButtonItems} state="default" onClick={handleSortChange} />
          </ButtonBlock>
        )}
        <SelectBlock>
          <CustomDropdown
            options={SelectItems}
            onChange={(_, val) => {
              console.log("Switch sort:", val); //
              setCurrentValue(val);
            }}
            value={currentValue}
            disabled={
              Boolean(loading) ||
              Boolean(error) ||
              (activeTabIndex === 0 ? articles.length === 0 : news.length === 0)
            }
          />
        </SelectBlock>
      </SectionButtonSort>
      <NewsBlock>
        {(activeTabIndex === 0 ? sortedArticles : sortedNews).map((post: Article | News) => (
          <Link
            to={activeTabIndex === 0 ? `/articles/${post.id}` : `/news/${post.id}`}
            key={post.id}
          >
            <PostCardMedium
              post={{
                image: post.image_url,
                date:
                  new Date(post.published_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }) || "November 19, 2025",
                title: post.title || "Default title",
              }}
            />
          </Link>
        ))}
      </NewsBlock>
      <PaginationWrapper>
        <PaginationButton
          onClick={() => {
            if (activeTabIndex === 0) setArticlesPage((page) => Math.max(page - 1, 1));
            else setNewsPage((page) => Math.max(page - 1, 1));
          }}
          disabled={(activeTabIndex === 0 ? articlesPage : newsPage) === 1}
        >
          Prev
        </PaginationButton>
        <PageInfo>
          Page {activeTabIndex === 0 ? articlesPage : newsPage} of{" "}
          {activeTabIndex === 0 ? maxArticlesPage : maxNewsPage}
        </PageInfo>
        <PaginationButton
          onClick={() => {
            if (activeTabIndex === 0)
              setArticlesPage((page) => Math.min(page + 1, maxArticlesPage));
            else setNewsPage((page) => Math.min(page + 1, maxNewsPage));
          }}
          disabled={
            activeTabIndex === 0 ? articlesPage >= maxArticlesPage : newsPage >= maxNewsPage
          }
        >
          Next
        </PaginationButton>
      </PaginationWrapper>
      <Footer />
    </WrapperForMainPage>
  );
};
