import { useEffect, useState } from "react";
import ChevronIcon from "../../ui/atoms/icons/chevron.icon";
import { ArticleCategory } from "../../graphql/types/article.types";
import Button from "../../ui/atoms/button.atom";

interface DropdownCheckboxProps {
  onChange: (value: ArticleCategory) => void;
  defaultValues?: Partial<ArticleCategory>;
}

export const defaultCheckboxValues: ArticleCategory = {
  Business: false,
  Entertainment: false,
  Health: false,
  Opinion: false,
  Politics: false,
  Sports: false,
  Travel: false,
  World: false,
};

const DropdownCheckbox: React.FC<DropdownCheckboxProps> = ({ onChange, defaultValues = defaultCheckboxValues }) => {
  // State to manage checkbox values
  const [checkboxes, setCheckboxes] = useState({ ...defaultCheckboxValues, ...defaultValues });
  const CatgoriesOptions = Object.entries(checkboxes);

  useEffect(() => setCheckboxes({ ...defaultCheckboxValues, ...defaultValues }), [defaultValues]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event: { target: { id: any; checked: any } }) => {
    const { id, checked } = event.target;

    onChange({ ...checkboxes, [id]: checked });

    setCheckboxes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const DropdownMenuList = () => (
    <ul className="p-3 space-y-1 text-sm bg-chinese-blue-300 rounded-2xl dark:text-gray-200" aria-labelledby="dropdownCheckbox">
      {CatgoriesOptions.map((item, index) => (
        <li key={index}>
          <div className="flex items-center p-2 rounded hover:bg-chinese-blue-100">
            <input
              id={item[0]}
              type="checkbox"
              checked={item[1]}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-chinese-blue-200 dark:border-gray-500"
            />
            <label htmlFor={item[0]} className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
              {item[0]}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {/* Dropdown checkbox button */}
      <Button
        id="dropdownCheckbox"
        data-dropdown-toggle="dropdownBgHover"
        className="text-slate-700 hover:text-slate-500 font-medium text-sm p-2.5 text-center inline-flex items-center"
        type="button">
        Categorias
        <ChevronIcon className="w-2.5 h-2.5 ms-3" />
      </Button>

      {/* Dropdown menu with checkboxes */}
      <div id="dropdownBgHover" className="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
        <DropdownMenuList />
      </div>
    </div>
  );
};

export default DropdownCheckbox;
/* const DropdownMenuList = () => (
    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckbox">
      {CatgoriesOptions.map((item, index) => (
        <li key={index}>
          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input
              id={item[0]}
              type="checkbox"
              checked={item[1]}
              onChange={handleCheckboxChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label htmlFor={item[0]} className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
              {item[0]}
            </label>
          </div>
        </li>
      ))}
    </ul>
  ); */
