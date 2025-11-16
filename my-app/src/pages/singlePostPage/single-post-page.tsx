import { useEffect, type FC } from "react";
import { Header } from "../../layout/header/index-header";
import {
  MediumPostsBlock,
  SocialMediaBlock,
  WrapperForSinglePostPage,
  WrapperForSocialMedia,
} from "./single-post-page-styles";
import { Footer } from "../../layout/footer/index-footer";
import { PostCardExtended } from "../../components/common/cardOfPost/index-postExtended";
import MockImage from "../../assets/Mock.jpg";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import { useTheme } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/storehooks";
import {
  clearSelectedArticle,
  fetchArticleById,
  selectArticleById,
  selectError,
  selectLoading,
} from "../../core/articlesSlice";
import { useParams } from "react-router-dom";
import MockImageExtended from "../../assets/ExtendedDefault.jpg";

export const SinglePostPage: FC = () => {
  const theme = useTheme();
  const strokeColor = theme.mode === "dark" ? "#888080e1" : "#313037";
  //extract id
  const { id } = useParams<{ id: string }>();
  // read state from store
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const article = useAppSelector(selectArticleById);
  // fetch by Id
  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(Number(id)));
      return () => {
        dispatch(clearSelectedArticle());
      };
    }
  }, [dispatch, id]);

  // rendering
  if (loading) return <div>Loading article...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article not found</div>;

  console.log("article on detail page:", article); //

  return (
    <WrapperForSinglePostPage>
      <Header isAuth={false} />
      <PostCardExtended
        post={{
          image: article.image_url || MockImageExtended,
          title: article.title || "Default title",
          text: article.summary || "Default text",
        }}
      />
      <WrapperForSocialMedia>
        <SocialMediaBlock>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </SocialMediaBlock>
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
