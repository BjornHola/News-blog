import { WrapperForTitle, Headline } from "./title-styles";

export interface ITitleProps {
  backgroundColor?: string;
  color?: string;
  content: string;
}

export function Title({ backgroundColor, color, content }: ITitleProps) {
  return (
    <WrapperForTitle>
      <Headline backgroundColor={backgroundColor} color={color}>
        {content}
      </Headline>
    </WrapperForTitle>
  );
}
