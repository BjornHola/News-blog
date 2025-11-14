import { useState, type FC } from "react";
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
import { CustomDropdown } from "../../components/common/Select/index-select";
import { SelectItems } from "../../components/common/Select/constants";
import { useIsMobile } from "../../utils/hooks/resizeWindow";
import { sortButtonItems } from "../../components/common/SortButtons/constants";

export const MainPage: FC = () => {
  const [currentValue, setCurrentValue] = useState(SelectItems[0]);
  const [sortValue, setSortValue] = useState(sortButtonItems[0]);
  const isMobile = useIsMobile(768);

  const handleSortChange = (idx: number) => {
    setSortValue(sortButtonItems[idx]);
  };

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
