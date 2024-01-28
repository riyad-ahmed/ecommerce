import React from 'react';

import Recommented from '../../Recommented';
import Products from '../../products';

const Home = ({ handleClick, result }) => {

  return (
    <div className='sm:ml-[18rem] p-4'>
      <Recommented handleClick={handleClick} />
      <div className='grid grid-cols-4 gap-4 mb-4 place-content-center'>
        <Products result={result} />
      </div>
    </div>
  );
};

export default Home;