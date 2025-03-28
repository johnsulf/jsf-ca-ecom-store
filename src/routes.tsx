import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
    ); 
}