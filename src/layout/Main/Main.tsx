import { Outlet } from 'react-router-dom';
import Breadcrumbs from './components/Breadcrumbs';

export default function Main() {
  return (
    <main className="flex w-full flex-1 flex-col p-4">
      <Breadcrumbs />
      <Outlet />
    </main>
  );
}
