import { type ISortButtonProps } from "./sortButton";

export const sortButtonItems: ISortButtonProps["labels"] = ["All", "Day", "Week", "Month", "Year"];

export type FilterValues = "All" | "Day" | "Week" | "Month" | "Year";
