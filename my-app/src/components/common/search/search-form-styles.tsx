import type { ChangeEvent } from "react";
import { styled } from "styled-components";

interface ISearchFormProps {
  isActive: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
