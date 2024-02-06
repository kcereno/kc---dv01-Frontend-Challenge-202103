import { useState } from 'react';
import { FilterType } from '../../../features/loanData/types';
import { DropdownOptionType } from './types';

type DropDownPropsType = {
  label: string;
  id: string;
  options: DropdownOptionType[];
  onChange: (selectedOption: FilterType) => void;
};

function Dropdown({ label, id, options, onChange }: DropDownPropsType) {
  const [selected, setSelected] = useState<null | any>(null);

  const handleSelect = (value: DropdownOptionType) => {
    setSelected(value);
    onChange({
      [id]: value,
    });
  };
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle={label}
        className="  text-white w-44 h-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 justify-between text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selected ? selected : label}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Drowpdown Menu */}
      <div
        id={label}
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-gray-900 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
