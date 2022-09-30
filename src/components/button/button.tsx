import React from 'react';
import './button.scss';

export interface LuluButtonProps {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export const LuluButton: React.FC<LuluButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >> = ({
  children,
  className,
  disabled,
  leftIcon,
  rightIcon,
  ...buttonProps
}) => (
  <button className="button" type="button" disabled={disabled} {...buttonProps}>
    {leftIcon && <span className="button__icon-left">{leftIcon}</span>}
    {children}
    {rightIcon && <span className="button__icon-right">{rightIcon}</span>}
  </button>
);
