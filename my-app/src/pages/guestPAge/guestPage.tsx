import type { FC } from "react";
import { ButtonMenu } from "../../components/common/Button-menu/button-menu-index";
import {
  Footer,
  ImageBlock,
  MainContent,
  NavigationSection,
  SectionCard,
  SectionsGrid,
  TextBlock,
  WrapperForGuestPage,
} from "./guest-page-styles";
import NewsIcon from "../../assets/News.svg?url";
import BlogIcon from "../../assets/Blogs.svg?url";
import ReportIcon from "../../assets/Reports.svg?url";
import LL2Icon from "../../assets/LL2.svg?url";

export const GuestPage: FC = () => {
  return (
    <WrapperForGuestPage>
      <NavigationSection>
        <ButtonMenu />
      </NavigationSection>
      <MainContent>
        <SectionsGrid>
          <SectionCard>
            <ImageBlock>
              <img src={NewsIcon} alt="News"></img>
            </ImageBlock>
            <TextBlock>
              <h3>News</h3>
              <p>
                Get an overview of the latest Spaceflight news, from various sources! Easily link
                your users to the right websites
              </p>
            </TextBlock>
          </SectionCard>
          <SectionCard>
            <ImageBlock>
              <img src={BlogIcon} alt="Blogs"></img>
            </ImageBlock>
            <TextBlock>
              <h3>Blogs</h3>
              <p>
                Blogs often provide a more detailed overview of launches and missions. A must-have
                for the serious spaceflight enthusiast
              </p>
            </TextBlock>
          </SectionCard>
          <SectionCard>
            <ImageBlock>
              <img src={ReportIcon} alt="Reports"></img>
            </ImageBlock>
            <TextBlock>
              <h3>Blogs</h3>
              <p>
                Space stations and other missions often publish their data. With SNAPI, you can
                include it in your app as well!
              </p>
            </TextBlock>
          </SectionCard>
          <SectionCard>
            <ImageBlock>
              <img src={LL2Icon} alt="LL2"></img>
            </ImageBlock>
            <TextBlock>
              <h3>Launch Library 2 Integration</h3>
              <p>
                Already using Launch Library 2 to get launches and events? Awesome! SNAPI offers
                integration so you can build relations between news and launches/events
              </p>
            </TextBlock>
          </SectionCard>
        </SectionsGrid>
        <Footer>Copyright © 2025 Spaceflight News & The Space Blogs</Footer>
      </MainContent>
    </WrapperForGuestPage>
  );
};
