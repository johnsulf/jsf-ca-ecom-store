import { Outlet } from 'react-router-dom';

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <main className="flex w-full flex-1 flex-col p-4">
      <Outlet />
    </main>
  );
}
