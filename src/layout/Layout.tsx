import * as React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export interface ILayoutProps {
}

export default function Layout (props: ILayoutProps) {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  );
}
