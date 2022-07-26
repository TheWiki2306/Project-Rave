import React from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import SecondSideBar from './components/second sidebar/SecondSideBar';
import LiveEvent from './components/live event/LiveEvent';
import FeaturedEvents from './components/featured events/FeaturedEvents';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <SecondSideBar />
      <LiveEvent />
      <FeaturedEvents />
    </div>
  );
}

export default App;
