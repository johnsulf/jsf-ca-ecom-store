/****
 * Layout module.
 *
 * @module Layout
 * @description Wraps the Header, Main content, and Footer into the application’s overall layout with global styling.
 */
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

/**
 * Layout component providing the overall page structure.
 *
 * Renders Header, a centered Main content wrapper, and Footer within a full-height flex layout.
 *
 * @component
 * @returns The layout wrapper for the application.
 */
export default function Layout() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 justify-center">
        <div className="w-full max-w-7xl px-4">
          <Main />
        </div>
      </main>
      <Footer />
    </div>
  );
}
