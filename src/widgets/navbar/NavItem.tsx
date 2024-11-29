import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

function navLinkClasses(isActive: boolean, isMobile: boolean) {
  let commonClasses = 'block text-sm px-2 py-4';
  if (isMobile) {
    return `${commonClasses} ${isActive ? 'text-white bg-blue-500 font-semibold' : 'hover:bg-blue-500 transition duration-300'
      }`;
  }
  commonClasses = 'py-4 pr-2 font-semibold hover:text-blue-500 transition duration-300';
  return `${commonClasses} ${isActive ? 'text-blue-500' : 'text-gray-500'}`;
}

type NavItemProps = {
  children: ReactNode;
  href: string;
  isMobile?: boolean;
};

export default function NavItem({ children, href, isMobile = false }: NavItemProps) {
  const item = (
    <NavLink to={href} className={({ isActive }) => navLinkClasses(isActive, isMobile)}>
      {children}
    </NavLink>
  );
  return isMobile ? <li>{item}</li> : item;
}
