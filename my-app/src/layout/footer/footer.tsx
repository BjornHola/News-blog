import { ButtonSwitch } from "../../components/common/Button-switch/button-switch-index";
import { getYear } from "../../utils/helpers/getDate";
import { ThemeButtonSection, StyledFooter, YearParagraph } from "./footer-styles";

export function Footer() {
  return (
    <StyledFooter>
      <YearParagraph>@{getYear} Blogologo</YearParagraph>
      <ThemeButtonSection>
        <ButtonSwitch role="switch" label="Off/On" />
      </ThemeButtonSection>
    </StyledFooter>
  );
}
// onClick => toggle  + aria
