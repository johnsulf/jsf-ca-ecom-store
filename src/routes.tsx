/**
 * Application routing module.
 *
 * @module AppRoutes
 * @description Defines the application's route configuration using React Router.
 */
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';

/**
 * AppRoutes component that renders the application's routes.
 *
 * @component
 * @returns The routing configuration for the application.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
