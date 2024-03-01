import React, { useEffect, useState } from "react";
import ChevronIcon from "../../ui/atoms/icons/chevron.icon";
import Button from "../../ui/atoms/button.atom";

export enum SORT_BY {
  RELEVANCE = "Relevance",
  NEWEST = "Newest",
  OLDEST = "Oldest",
}

interface DropdownSortByProps {
  onChange: (value: SORT_BY) => void;
  defaultValues?: SORT_BY;
}

const sortingOptions = [SORT_BY.RELEVANCE, SORT_BY.NEWEST, SORT_BY.OLDEST];
export const sortByValues = {
  [SORT_BY.NEWEST]: "publishedAt:asc",
  [SORT_BY.OLDEST]: "publishedAt:desc",
  [SORT_BY.RELEVANCE]: "views:asc, claps:asc",
};

const DropdownSortBy: React.FC<DropdownSortByProps> = ({ onChange, defaultValues = SORT_BY.NEWEST }) => {
  // State to manage selected sort option
  const [selectedOption, setSelectedOption] = useState<SORT_BY>(defaultValues);

  useEffect(() => setSelectedOption(defaultValues), [defaultValues]);

  // Function to handle sort option selection
  const handleOptionSelect = (option: SORT_BY) => {
    if (option !== selectedOption) {
      onChange(option);
      setSelectedOption(option);
    }
  };

  const DropdownMenuList = () => (
    <ul className="py-2 rounded-2xl text-sm bg-chinese-blue-300 dark:text-gray-200" aria-labelledby="dropdownSortBy">
      {sortingOptions.map((option) => (
        <li key={option}>
          <Button
            onClick={() => handleOptionSelect(option)}
            className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-chinese-blue-100 dark:hover:text-white ${
              selectedOption === option ? "bg-gray-100 dark:bg-chinese-blue-100 dark:text-white" : ""
            }`}>
            {option}
          </Button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* Dropdown sort button */}
      <Button
        id="dropdownSortBy"
        data-dropdown-toggle="dropdownDefaultRadio"
        className="text-slate-700 hover:text-slate-500 font-medium text-sm p-2.5 text-center inline-flex items-center"
        type="button">
        Sort By
        <ChevronIcon className="w-2.5 h-2.5 ms-3" />
      </Button>

      {/* Dropdown menu for sorting options */}
      <div id="dropdownDefaultRadio" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <DropdownMenuList />
      </div>
    </div>
  );
};

export default DropdownSortBy;
