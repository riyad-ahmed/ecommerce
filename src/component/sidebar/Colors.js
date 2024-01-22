import React from 'react';

const Colors = () => {
  return (
    <div>
      <h1 class='text-[#FFA726] text-lg'>Color----</h1>
      <label class='text-sm text-white w-48 m-auto'>
        <span>All</span>
        <input type="radio" name='test' />
      </label>
      <label class='flex justify-between p-1'>
        <span>Black</span>
        <input type="radio" name='test' />
      </label>
    </div>
  );
};

export default Colors;