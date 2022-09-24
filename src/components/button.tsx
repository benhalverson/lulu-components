import React from 'react';

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
  <button type="button" disabled={disabled} {...buttonProps}>
    {leftIcon && <span className="prp-button__icon-left">{leftIcon}</span>}
    {children}
    {rightIcon && <span className="prp-button__icon-right">{rightIcon}</span>}
  </button>
);
