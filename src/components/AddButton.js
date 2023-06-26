import React, { useState } from 'react';
import { Add, Down } from '../assets/images/icons';

const AddButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="mt-3">
      <p className="panelHead">MAIN PANEL</p>
      <div className="d-flex flex-row px-2 my-2 justify-content-between ml-4 justify-content-center align-items-center addLayout pointer" onClick={toggleDropdown}>
        <div className="d-flex flex-row p-3 align-items-center align-middle">
            <img src={Add} alt="add" />
            <p className="text-white my-auto mx-2">Add</p>
        </div>
        <div>
          <img src={Down} alt="down" />
        </div>
      </div>   
      {isDropdownOpen && (
            <div className="dropdown-content">
              <p>Dropdown Item 1</p>
              <p>Dropdown Item 2</p>
              <p>Dropdown Item 3</p>
            </div>
          )}
    </div>
  );
};

export default AddButton;