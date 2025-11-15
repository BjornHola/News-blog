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
} from "./main-page-styles";
import { Title } from "../../components/common/Titles/title-index";
import { Tab } from "../../components/common/tabs/tabs-index";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import { Footer } from "../../layout/footer/index-footer";
import { SortButton } from "../../components/common/SortButtons/index.-sortButtons";
import { CustomDropdown } from "../../components/common/Select/index-select";
import { SelectItems } from "../../components/common/Select/constants";
import { useIsMobile } from "../../utils/hooks/resizeWindow";
import { sortButtonItems } from "../../components/common/SortButtons/constants";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/storehooks";
import {
  clearError,
  fetchArticles,
  selectArticles,
  selectError,
  selectLoading,
} from "../../core/articlesSlice";

export const MainPage: FC = () => {
  const [currentValue, setCurrentValue] = useState(SelectItems[0]);
  const [sortValue, setSortValue] = useState(sortButtonItems[0]);
  const isMobile = useIsMobile(768);

  const handleSortChange = (idx: number) => {
    setSortValue(sortButtonItems[idx]);
  };

  // store
  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticles);
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  // load data fro API
  useEffect(() => {
    dispatch(fetchArticles({ limit: 12, offset: 0 }));
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(clearError());
    dispatch(fetchArticles({ limit: 12, offset: 0 }));
  };

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorMessage>⚠️ {error}</ErrorMessage>
        <RetryButton onClick={handleRetry}>Try Again</RetryButton>
      </ErrorContainer>
    );
  }

  return (
    <WrapperForMainPage>
      <Header isAuth={false} />
      <WrapperForTitleTabs>
        <Title content="My Blog" />
        <Tab
          labels={["Articles", "News"]}
          state="default"
          onTabChange={(index) => console.log("Active tab:", index)}
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
            onChange={(_, val) => setCurrentValue(val)}
            value={currentValue}
          />
        </SelectBlock>
      </SectionButtonSort>
      <NewsBlock>
        {articles.map((article) => (
          <PostCardMedium
            key={article.id}
            post={{
              image: article.image_url,
              date: new Date(article.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
              title: article.title,
            }}
          />
        ))}
      </NewsBlock>
      <Footer />
    </WrapperForMainPage>
  );
};
