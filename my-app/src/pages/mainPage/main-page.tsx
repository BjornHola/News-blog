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
import { sortButtonItems, type FilterValues } from "../../components/common/SortButtons/constants";
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
  const [sortValue, setSortValue] = useState(sortButtonItems[0]); // Day Week Month Year
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

  // filtering articles/news
  function filterByDate<T extends { published_at: string }>(
    items: Array<T>,
    filterValue: FilterValues | null,
  ): Array<T> {
    if (filterValue === null) return items;

    const now = new Date();
    let limit: Date;

    switch (filterValue) {
      case "Day":
        limit = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case "Week":
        limit = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "Month":
        limit = new Date(now);
        limit.setMonth(now.getMonth() - 1);
        break;
      case "Year":
        limit = new Date(now);
        limit.setFullYear(now.getFullYear() - 1);
        break;
      default:
        limit = new Date(0);
    }
    return items.filter((item) => new Date(item.published_at) >= limit);
  }

  // active sortButton state
  const [activeFilter, setActiveFilter] = useState<FilterValues | null>(null);
  const handleActiveFilter = (idx: number | null) => {
    if (idx === null) {
      setActiveFilter(null);
    } else {
      setActiveFilter(sortButtonItems[idx] as "Day" | "Week" | "Month" | "Year");
    }
  };

  // filter values of Array of News and Articles
  const filteredArticles = filterByDate(sortedArticles, activeFilter);
  console.log(filteredArticles); //
  const filteredNews = filterByDate(sortedNews, activeFilter);
  console.log(filteredNews); //

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
            <SortButton labels={sortButtonItems} state="default" onClick={handleActiveFilter} />
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
        {(activeTabIndex === 0 ? filteredArticles : filteredNews).map((post: Article | News) => (
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
                  }) || `${new Date(Date.now())}`,
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
