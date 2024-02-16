import React, { useState } from "react";
import ChevronIcon from "../../ui/atoms/icons/chevron.icon";
import Button from "../../ui/atoms/button.atom";

// Would use the used enum.
export enum DATE_RANGE {
  ALL_TIME = "ALL_TIME",
  YESTERDAY = "YESTERDAY",
  PAST_WEEK = "PAST_WEEK",
  PAST_MONTH = "PAST_MONTH",
}

const DATE_RANGE_STRING_MAP: Record<DATE_RANGE, string> = {
  [DATE_RANGE.ALL_TIME]: "All since 2000",
  [DATE_RANGE.YESTERDAY]: "Yesterday",
  [DATE_RANGE.PAST_WEEK]: "Past week",
  [DATE_RANGE.PAST_MONTH]: "Past month",
};

const sortingOptions: DATE_RANGE[] = [DATE_RANGE.ALL_TIME, DATE_RANGE.YESTERDAY, DATE_RANGE.PAST_WEEK, DATE_RANGE.PAST_MONTH];

interface DropdownDateRangeProps {
  onChange: (value: DATE_RANGE) => void;
  defaultValues?: DATE_RANGE;
}

// const sortingOptions = [DATE_RANGE.ALL_TIME, DATE_RANGE.YESTERDAY, DATE_RANGE.PAST_WEEK, DATE_RANGE.PAST_MONTH];

const DropdownDateRange: React.FC<DropdownDateRangeProps> = ({ onChange, defaultValues = DATE_RANGE.ALL_TIME }) => {
  // State to manage selected sort option
  const [selectedOption, setSelectedOption] = useState<DATE_RANGE>(defaultValues);

  // Function to handle sort option selection
  const handleOptionSelect = (option: DATE_RANGE) => {
    if (option !== selectedOption) {
      onChange(option);
      setSelectedOption(option);
    }
  };

  const DropdownMenuList = () => (
    <ul className="py-2 text-sm rounded-2xl bg-chinese-blue-300 dark:text-gray-200" aria-labelledby="dropdownDateRange">
      {sortingOptions.map((option) => (
        <li key={option}>
          <Button
            onClick={() => handleOptionSelect(option)}
            className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-chinese-blue-100 dark:hover:text-white ${
              selectedOption === option ? "bg-gray-100 dark:bg-chinese-blue-100 dark:text-white" : ""
            }`}>
            {DATE_RANGE_STRING_MAP[option]}
          </Button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* Dropdown sort button */}
      <Button
        id="dropdownDateRange"
        data-dropdown-toggle="dropdown"
        className="text-slate-700 hover:text-slate-500 font-medium text-sm p-2.5 text-center inline-flex items-center"
        type="button">
        Date Range
        <ChevronIcon className="w-2.5 h-2.5 ms-3" />
      </Button>

      {/* Dropdown menu for sorting options */}
      <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <DropdownMenuList />
      </div>
    </div>
  );
};

export default DropdownDateRange;
