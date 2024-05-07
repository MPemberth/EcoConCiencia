import React from 'react';

import Header from '../components/Header';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';
import AsideRight from '../components/AsideRight';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <div>
      
      {<Header/>}
      <hr/>
      {<Main/>}
      {<Dashboard/>}
      
      
      
      
    </div>
  );
};

export default Home;
