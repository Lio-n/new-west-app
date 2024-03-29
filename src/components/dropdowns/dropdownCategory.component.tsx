import { useEffect, useState } from 'react';
import ChevronIcon from '../../ui/atoms/icons/chevron.icon';
import { ArticleCategory } from '../../graphql/types/article.types';
import Button from '../../ui/atoms/button.atom';
import useClickOutside from '../../hooks/clickOutside.hook';

interface DropdownCheckboxProps {
  onChange: (value: ArticleCategory) => void;
  defaultValues?: Partial<ArticleCategory>;
}

const defaultCheckboxValues: ArticleCategory = {
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

  // Toggle menu visibility
  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLUListElement>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => setCheckboxes({ ...defaultCheckboxValues, ...defaultValues }), [defaultValues]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (event: { target: { id: string; checked: boolean } }) => {
    const { id, checked } = event.target;

    onChange({ ...checkboxes, [id]: checked });

    setCheckboxes((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const DropdownMenuList = () => (
    <ul ref={ref} className="p-3 space-y-1 text-sm bg-chinese-blue-300 rounded-2xl dark:text-gray-200">
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
        className="text-slate-700 hover:text-slate-500 font-medium text-sm p-2.5 text-center inline-flex items-center"
        onClick={toggleMenu}
        type="button"
      >
        Categorias
        <ChevronIcon className="w-2.5 h-2.5 ms-3" />
      </Button>

      {/* Dropdown menu with checkboxes */}
      <div className={`absolute z-10 w-48 bg-white rounded-lg shadow dark:bg-gray-700 ${isOpen ? 'block' : 'hidden'}`}>
        <DropdownMenuList />
      </div>
    </div>
  );
};

export default DropdownCheckbox;
