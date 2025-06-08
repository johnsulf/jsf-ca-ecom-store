/**
 * Main content wrapper module.
 *
 * @module Main
 * @description Provides the main layout container that includes breadcrumbs and renders routed content.
 */
import { Outlet } from 'react-router-dom';
import Breadcrumbs from './components/Breadcrumbs';

/**
 * Main component serving as the content container.
 *
 * Renders Breadcrumbs for navigation context and an Outlet for nested routes.
 *
 * @component
 * @returns The main layout element.
 */
export default function Main() {
  return (
    <main className="flex w-full flex-1 flex-col p-4">
      <Breadcrumbs />
      <Outlet />
    </main>
  );
}
