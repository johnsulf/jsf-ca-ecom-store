import { Outlet } from 'react-router-dom';

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <main className="min-h-[90svh)] w-full p-4">
      <Outlet />
    </main>
  );
}
