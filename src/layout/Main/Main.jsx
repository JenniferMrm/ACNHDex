import React from 'react';
import Nav from '@components/segments/Nav';
import Footer from '@components/segments/Footer';

function Main(props) {
  const { children } = props;
  return (
    <div>
      <Nav />
      { children }
      <Footer />
    </div>
  );
}

export default Main;