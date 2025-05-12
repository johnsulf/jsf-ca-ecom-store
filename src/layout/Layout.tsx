import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

export default function Layout() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
