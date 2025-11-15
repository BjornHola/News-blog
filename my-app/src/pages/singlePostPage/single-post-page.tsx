import type { FC } from "react";
import { Header } from "../../layout/header/index-header";
import {
  MediumPostsBlock,
  SocialMediaBlock,
  WrapperForSinglePostPage,
  WrapperForSocialMedia,
} from "./single-post-page-styles";
import { Footer } from "../../layout/footer/index-footer";
import { PostCardExtended } from "../../components/common/cardOfPost/index-postExtended";
import MockImageExtended from "../../assets/ExtendedDefault.jpg";
import MockImage from "../../assets/Mock.jpg";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import { useTheme } from "styled-components";

export const SinglePostPage: FC = () => {
  const theme = useTheme();
  const strokeColor = theme.mode === "dark" ? "#888080e1" : "#313037";

  return (
    <WrapperForSinglePostPage>
      <Header isAuth={false} />
      <PostCardExtended
        post={{
          image: MockImageExtended,
          title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
          text: `Astronauts Kayla Barron and Raja Chari floated out of the International Space Station
             airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays 
             to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked 
             his 341st day in orbit, a U.S. record for a single spaceflight.During the final days of Alice Neel’s 
             blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned 
             the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People 
             Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits
              of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.
              The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. 
              The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view
               at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian
                gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer 
                Exhibition” at Marlborough London, which runs through September 10th. The excitement surrounding this exhibition 
                delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s 
                strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting
                 Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold 
                 for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s 
                 New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under 
                 $1.6 million, notching her third-highest auction result.The demand for Maggi Hambling’s evocative portraits and exuberant depictions
                  of seascapes and landscapes surged this past week, when the number of collectors inquiring on her work increased more than tenfold
                   from the week before. The British artist, esteemed for her whirling, gestural paintings and bold public sculptures, has seen a 
                   consistent wave of interest in her work that has accelerated in the past few years. This recent uptick in interest  is consistent 
                   with Hambling’s career trajectory, which has been punctuated by a flurry of public commissions, institutional recognition, and 
                   secondary-market demand.`,
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
