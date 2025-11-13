import type { FC } from "react";
import { Header } from "../../layout/header/index-header";
import {
  WrapperForMainPage,
  WrapperForTitleTabs,
  SectionButtonSort,
  ButtonBlock,
  SelectBlock,
  NewsBlock,
} from "./main-page-styles";
import { Title } from "../../components/common/Titles/title-index";
import { Tab } from "../../components/common/tabs/tabs-index";
import { PostCardMedium } from "../../components/common/cardOfPost/index-postmedium";
import MockImage from "../../assets/Mock.jpg";
import { Footer } from "../../layout/footer/index-footer";
import { SortButton } from "../../components/common/SortButtons/index.-sortButtons";

export const MainPage: FC = () => {
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
        <ButtonBlock>
          <SortButton state="default" labels={["Day", "Week", "Month", "Year"]} />
        </ButtonBlock>
        <SelectBlock></SelectBlock>
      </SectionButtonSort>
      <NewsBlock>
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
      </NewsBlock>
      <Footer />
    </WrapperForMainPage>
  );
};
// без пагинации и сортровки с моками
