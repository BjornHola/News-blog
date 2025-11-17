import type { FC, MouseEvent } from "react";
import {
  StyledWrapperMedium,
  ImageDiv,
  ContentDiv,
  SpanWithDate,
  Headline,
} from "./postmedium-styles";
import MockImage from "../../../assets/Mock.jpg";

export interface Post {
  id?: string | undefined;
  image?: string;
  text?: string;
  date: string;
  title: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const PostCardMedium: FC<{ post: Post }> = ({ post }) => {
  const { image, date, title, onClick, id } = post;

  return (
    <StyledWrapperMedium style={{ cursor: "pointer" }} onClick={onClick} id={id}>
      {image ? (
        <ImageDiv>
          <img
            src={image}
            alt={title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = MockImage;
            }}
            onClick={onClick}
            style={{ cursor: "pointer" }}
          />
        </ImageDiv>
      ) : (
        <img src={MockImage} alt="Default preview" />
      )}
      <ContentDiv>
        <SpanWithDate>{date}</SpanWithDate>
        <Headline>{title}</Headline>
      </ContentDiv>
    </StyledWrapperMedium>
  );
};
