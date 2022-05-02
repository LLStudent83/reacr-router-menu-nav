import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './menuItem.scss';

export type MenuItemProps = {
  menuItemName: string;
  pathName: string;
};

export default function MenuItem({ menuItemName, pathName }
: MenuItemProps): JSX.Element {
  const baseClassName: string = 'menu__item';
  return (
    <NavLink
      to={pathName}
      className={({ isActive }) => (isActive
        ? `${baseClassName} menu__item-active` : `${baseClassName}`)}
    >
      {menuItemName}
    </NavLink>
  );
}
