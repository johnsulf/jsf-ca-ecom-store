import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

export default function Layout() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <Main />
      </div>
      </main>
      <Footer />
    </div>
  );
}
