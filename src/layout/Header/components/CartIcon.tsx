import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ICartIconProps {}

export default function CartIcon(props: ICartIconProps) {
  return (
    <Button variant="default" size="icon" role="link">
      <Link to="/cart">
        <ShoppingCart />
      </Link>
      <span className="sr-only">Go to cart</span>
    </Button>
  );
}
