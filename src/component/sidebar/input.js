import React from 'react';

const Input = () => {
  return (
    <div class='text-sm text-white w-48 m-auto'>
      <label class='flex justify-between p-1'>
        <span>All</span>
        <input type="radio" name='test' />
      </label>
    </div>
  );
};

export default Input;