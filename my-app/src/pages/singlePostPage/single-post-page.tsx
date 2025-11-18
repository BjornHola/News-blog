import { useEffect, type FC } from "react";
import { Header } from "../../layout/header/index-header";
import {
  MediumPostsBlock,
  WrapperForSinglePostPage,
  WrapperForSocialMedia,
} from "./single-post-page-styles";
import { Footer } from "../../layout/footer/index-footer";
import { PostCardExtended } from "../../components/common/cardOfPost/index-postExtended";
import MockImage from "../../assets/Mock.jpg";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/storehooks";
import {
  clearSelectedArticle,
  fetchArticleById,
  selectArticleById,
  selectError as selectArticleError,
  selectLoading as selectArticleLoading,
} from "../../core/articlesSlice";
import { useLocation, useParams } from "react-router-dom";
import {
  clearSelectedNews,
  fetchNewsById,
  selectNewsById,
  selectNewsError,
  selectNewsLoading,
} from "../../core/newsSlice";
import { MediaButton } from "../../components/common/SocilaMediaButtons/socialmediaButtons";

export const SinglePostPage: FC = () => {
  //extract id to get article/news
  const { id } = useParams<{ id: string }>();
  //active either article or news
  const location = useLocation();
  const isArticlePage = location.pathname.startsWith("/articles");
  const isNewsPage = location.pathname.startsWith("/news");

  // read state from store (articles)
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectArticleLoading);
  const error = useAppSelector(selectArticleError);
  const article = useAppSelector(selectArticleById);

  // read state from store to transit to single piece of news
  const loadingNews = useAppSelector(selectNewsLoading);
  const errorNews = useAppSelector(selectNewsError);
  const news = useAppSelector(selectNewsById);

  // fetch article by Id
  useEffect(() => {
    if (id && isArticlePage) {
      dispatch(fetchArticleById(Number(id)));
      return () => {
        dispatch(clearSelectedArticle());
      };
    }
  }, [dispatch, id, isArticlePage]);

  // fetch news by Id
  useEffect(() => {
    if (id && isNewsPage) {
      dispatch(fetchNewsById(Number(id)));
      return () => {
        dispatch(clearSelectedNews());
      };
    }
  }, [dispatch, id, isNewsPage]);

  // rendering results (article)
  if (isArticlePage) {
    if (loading)
      return (
        <div style={{ color: "black", display: "block", margin: "0 auto" }}>Loading article...</div>
      );
    if (error)
      return (
        <div style={{ color: "black", display: "block", margin: "0 auto" }}>Error: {error}</div>
      );
    if (!article)
      return (
        <div style={{ color: "black", display: "block", margin: "0 auto" }}>Article not found</div>
      );
    console.log("article on detail page:", article); //
  }

  // rendering results (news)
  if (isNewsPage) {
    if (loadingNews)
      return (
        <div style={{ color: "black", display: "block", margin: "0 auto" }}>Loading news...</div>
      );
    if (errorNews)
      return (
        <div style={{ color: "black", display: "block", margin: "0 auto" }}>Error: {errorNews}</div>
      );
    if (!news)
      return (
        <div style={{ color: "black", display: "block", margin: "0 auto" }}>News not found</div>
      );
    console.log("news on detail page:", news); //
  }

  return (
    <WrapperForSinglePostPage>
      <Header isAuth={false} />
      {isArticlePage && article && (
        <PostCardExtended
          post={{
            image: article.image_url,
            title: article.title || "Default title",
            text: article.summary || "Default text",
          }}
        />
      )}
      {isNewsPage && news && (
        <PostCardExtended
          post={{
            image: news.image_url,
            title: news.title,
            text: news.summary,
          }}
        />
      )}
      <WrapperForSocialMedia>
        <MediaButton />
      </WrapperForSocialMedia>
      <MediumPostsBlock>
        <PostCardMedium
          post={{
            image: MockImage,
            date: "April 20, 2021",
            title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
          }}
        />
        <PostCardMedium
          post={{
            image: MockImage,
            date: "April 20, 2021",
            title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
          }}
        />
        <PostCardMedium
          post={{
            image: MockImage,
            date: "April 20, 2021",
            title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
          }}
        />
      </MediumPostsBlock>
      <Footer />
    </WrapperForSinglePostPage>
  );
};
// MediumPostsBlock - ?
