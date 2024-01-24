import React from 'react';
import Card from './card';
// import Sidbar from '../sidebar/sidbar';

const Home = () => {
  return (
    <div class='sm:ml-[18rem] p-4'>
      <div class='grid grid-cols-4 gap-4 mb-4'>
        {[...Array(10)].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;