import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from '@/layout/Header/components/ThemeToggle';
import { NavLink } from 'react-router-dom';
import CartIcon from './components/CartIcon';

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky border-b p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/">Home</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <NavLink to="/contact">Contact</NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <ThemeToggle />
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
