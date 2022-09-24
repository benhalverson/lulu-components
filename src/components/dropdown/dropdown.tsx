import React, { useEffect, useState } from 'react';
import { LuluButton } from '../button/button';

export interface LuluDropDownProps {
  value: string;
  placeholder: string;
  leftIcon: string;
  dropdownContent: JSX.Element;
  closeOnContentClick?: boolean;
}

export const LuluDropdown: React.FC<LuluDropDownProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >> = ({ value, placeholder, closeOnContentClick, dropdownContent }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleContentClick: React.MouseEventHandler<HTMLSpanElement> = e => {
    if (!closeOnContentClick) {
      e.nativeEvent.stopImmediatePropagation();
    }
  };

  useEffect(() => {
    const clickHandler = () => {
      if (!dropdownOpen) {
        return;
      }
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownOpen]);
  return (
    <div>
      <LuluButton onClick={handleDropdownToggle}>{value || placeholder}</LuluButton>
      <div>
        {dropdownOpen && (
          <span onClick={handleContentClick}>{dropdownContent}</span>
        )}
      </div>
    </div>
  );
};
