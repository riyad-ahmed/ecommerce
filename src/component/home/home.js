import React from 'react';

import Recommented from '../../Recommented';
import Products from '../../products';
import Pagination from '../sidebar/pasinetion';

const Home = ({ handleClick, result }) => {

  return (
    <div className='sm:ml-[18rem] p-4'>
      <Recommented handleClick={handleClick} />
      <div className='grid grid-cols-4 gap-8 mb-4 place-content-center'>
        <Products result={result} />
      </div>
      < Pagination />
    </div>
  );
};

export default Home;