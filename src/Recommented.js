import React from 'react';
import Buttons from './component/Buttons';

const Recommented = ({ handleClick }) => {
  return (
    <div>
      <h1 className='text-2xl font-bold py-4'>Recommended</h1>
      <div className='grid grid-cols-2 gap-4 mb-4'>
        <Buttons onClickHandler={handleClick} value="" title="Al Products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>

    </div>
  );
};

export default Recommented;