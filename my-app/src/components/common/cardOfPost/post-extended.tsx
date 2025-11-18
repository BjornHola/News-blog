import type { FC, MouseEvent } from "react";
import {
  ContentContainer,
  ExtendedImageDiv,
  StyledWrapperExtended,
  TitleBlock,
} from "./post-extended-styles";
import MockImageExtended from "../../../assets/ExtendedDefault.jpg";

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
          <img
            src={image}
            alt={title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = MockImageExtended;
            }}
            onClick={onClick}
            style={{ cursor: "pointer" }}
          />
        </ExtendedImageDiv>
      ) : (
        <img src={MockImageExtended} alt="Default preview" />
      )}
      <ContentContainer>{text}</ContentContainer>
    </StyledWrapperExtended>
  );
};
