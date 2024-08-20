import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const CustomDropdown = ({ dropdownTitle, dropdownItems }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {dropdownTitle}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdownItems.map((item, index) => (
          <Dropdown.Item href="#" key={index}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
