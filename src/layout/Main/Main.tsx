import { Outlet } from 'react-router-dom';
import Breadcrumbs from './components/Breadcrumbs';

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <main className="flex w-full flex-1 flex-col p-4">
      <Breadcrumbs />
      <Outlet />
    </main>
  );
}
