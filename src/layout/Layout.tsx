import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';

export interface ILayoutProps {}

export default function Layout(props: ILayoutProps) {
  return (
    <div className="bg-background flex min-h-svh flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
