import React, { useEffect, useState } from 'react';
import ChevronIcon from '../../ui/atoms/icons/chevron.icon';
import Button from '../../ui/atoms/button.atom';
import { SORT_BY } from '../../interfaces/filterOptions.interface';
import useClickOutside from '../../hooks/clickOutside.hook';

interface DropdownSortByProps {
  onChange: (value: SORT_BY) => void;
  defaultValues?: SORT_BY;
}

const sortingOptions = [SORT_BY.RELEVANCE, SORT_BY.NEWEST, SORT_BY.OLDEST];

const DropdownSortBy: React.FC<DropdownSortByProps> = ({ onChange, defaultValues = SORT_BY.NEWEST }) => {
  // State to manage selected sort option
  const [selectedOption, setSelectedOption] = useState<SORT_BY>(defaultValues);

  // Toggle menu visibility
  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLUListElement>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => setSelectedOption(defaultValues), [defaultValues]);

  // Function to handle sort option selection
  const handleOptionSelect = (option: SORT_BY) => {
    if (option !== selectedOption) {
      onChange(option);
      setSelectedOption(option);
    }
  };

  const DropdownMenuList = () => (
    <ul ref={ref} className="py-2 rounded-2xl text-sm bg-chinese-blue-300 dark:text-gray-200">
      {sortingOptions.map((option) => (
        <li key={option}>
          <Button
            onClick={() => handleOptionSelect(option)}
            className={`block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-chinese-blue-100 dark:hover:text-white ${
              selectedOption === option ? 'bg-gray-100 dark:bg-chinese-blue-100 dark:text-white' : ''
            }`}
          >
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
        className="text-slate-700 hover:text-slate-500 font-medium text-sm p-2.5 text-center inline-flex items-center"
        onClick={toggleMenu}
        type="button"
      >
        Sort By
        <ChevronIcon className="w-2.5 h-2.5 ms-3" />
      </Button>

      {/* Dropdown menu for sorting options */}
      <div className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${isOpen ? 'block' : 'hidden'}`}>
        <DropdownMenuList />
      </div>
    </div>
  );
};

export default DropdownSortBy;
