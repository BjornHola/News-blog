import { type ChangeEvent, type FC } from "react";
import { InputForSearch } from "./search-form-styles";

interface ISearchFormProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchForm: FC<ISearchFormProps> = ({
  placeholder,
  type,
  name,
  value = "",
  onChange,
}) => {
  return (
    <InputForSearch
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
