import type { FC, MouseEvent } from "react";
import {
  ContentContainer,
  ExtendedImageDiv,
  StyledWrapperExtended,
  TitleBlock,
} from "./post-extended-styles";

export interface ExtendedPost {
  id?: string | undefined;
  image?: string;
  text: string;
  title: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const PostCardExtended: FC<{ post: ExtendedPost }> = ({ post }) => {
  const { image, text, title, onClick, id } = post;

  return (
    <StyledWrapperExtended style={{ cursor: "pointer" }} onClick={onClick} id={id}>
      <TitleBlock>{title} </TitleBlock>
      {image ? (
        <ExtendedImageDiv>
          <img src={image} alt={title} onClick={onClick} style={{ cursor: "pointer" }} />
        </ExtendedImageDiv>
      ) : (
        <p>Default caption</p>
      )}
      <ContentContainer>{text}</ContentContainer>
    </StyledWrapperExtended>
  );
};
