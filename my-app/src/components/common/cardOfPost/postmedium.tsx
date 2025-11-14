import type { FC, MouseEvent } from "react";
import {
  StyledWrapperMedium,
  ImageDiv,
  ContentDiv,
  SpanWithDate,
  Headline,
} from "./postmedium-styles";

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
          <img src={image} alt={title} onClick={onClick} style={{ cursor: "pointer" }} />
        </ImageDiv>
      ) : (
        <p>Default caption</p>
      )}
      <ContentDiv>
        <SpanWithDate>{date}</SpanWithDate>
        <Headline>{title}</Headline>
      </ContentDiv>
    </StyledWrapperMedium>
  );
};
