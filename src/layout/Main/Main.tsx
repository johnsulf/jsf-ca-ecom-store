import * as React from 'react';
import { Outlet } from 'react-router-dom';

export interface IMainProps {
}

export default function Main (props: IMainProps) {
  return (
    <main>
      <Outlet />
    </main>
  );
}
