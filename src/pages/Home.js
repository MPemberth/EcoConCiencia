import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Aside from '../components/Aside';

const Home = () => {
  return (
    <div>
      
      {<Header/>}
      {<Main/>}
      {<Aside/>}
      {<Footer/> }
      {/* <Header />
      <Nav />
      <Main /> 
      */}
    </div>
  );
};

export default Home;
