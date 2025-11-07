import { type ChangeEvent, type FC } from "react";

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
    <input placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} />
  );
};
