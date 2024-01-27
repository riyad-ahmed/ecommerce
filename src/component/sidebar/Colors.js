import React from 'react';

const Colors = () => {
  return (
    <div>
      <h1 class='text-[#FFA726] text-lg'>Color----</h1>
      <div class='text-sm text-black w-48 m-auto'>
        <label class='flex justify-between p-1'>
          <span>All</span>
          <input type="radio" name='test' />
        </label>
        <label class='flex justify-between p-1'>
          <span>Black</span>
          <input type="radio" name='test' />
        </label>
      </div>
    </div>
  );
};

export default Colors;