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
//   const [isActive, setIsActive] = useState(false);
//   const handleWithActive = () => {
//     setIsActive((prev) => !prev);
//   }
//   const [searchValue, setSearchValue] = useState("");

//   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     if (!newValue) {
//       setSearchValue("");
//     }
//     setSearchValue(newValue);
//   };

//   return (
//     {isActive
//   ? <>
//       <SearchForm placeholder="Search" type="input" name = "Search" value ={searchValue} onChange={onSearchChange}/>
//       <button onClick={() => setIsActive(false)}>✕</button>
//     </>
//   : <SearchButton onClick={() => setIsActive(true)} />
// }
//   )
// SearchComponent.tsx
