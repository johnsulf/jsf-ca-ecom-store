import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
