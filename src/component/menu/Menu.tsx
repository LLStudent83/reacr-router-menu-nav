import * as React from 'react';
import { nanoid } from 'nanoid';
import MenuItem from '../menuItem/MenuItem';

type MenuItemProps = {
  menuItemName: string;
  pathName: string;
};
const dataMenuItems: MenuItemProps[] = [
  {
    menuItemName: 'Главная',
    pathName: '/',
  },
  {
    menuItemName: 'Дрифт-такси',
    pathName: '/drift',
  },
  {
    menuItemName: 'Time Attack',
    pathName: '/timeattack',
  },
  {
    menuItemName: 'Forza Karting',
    pathName: '/forza',
  },
];

export default function Menu(): JSX.Element {
  return (
    <nav className="menu">
      { dataMenuItems.map((item: MenuItemProps) => (
        <MenuItem
          menuItemName={item.menuItemName}
          pathName={item.pathName}
          key={nanoid()}
        />
      ))}
    </nav>

  );
}
