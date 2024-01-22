import React from 'react';
import Card from './card';
// import Sidbar from '../sidebar/sidbar';

const Home = () => {
  return (
    <div class='sm:ml-[18rem] p-4'>
      <div class='grid grid-cols-4 gap-4 mb-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;