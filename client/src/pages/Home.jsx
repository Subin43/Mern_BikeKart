import React from 'react';
import HomeComponent from '../components/HomeComponent';
import BuyingGuide from '../components/Guide/BuyingGuide';
import Vehicles from '../components/Vehicles';
import Brand from '../components/brand/Brand';
import Accrodian from '../components/FAQ/Accrodian';
// import BikeKart from '../components/bikekart/BikeKart';
import Sell from './sell/Sell';

const Home = () => {
  return (
    < >
      <HomeComponent/>
      {/* <BikeKart /> */}
      <BuyingGuide />
      <Sell />
      <Vehicles />
      <Brand />
      <Accrodian />
    </ >
  );
};

export default Home;
