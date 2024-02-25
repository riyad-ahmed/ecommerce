import React from 'react';

const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <div className='text-sm text-black w-48 m-auto'>
      <label className='flex justify-between p-1'>
        <span style={{ backgroundColor: color }}>{title}</span>
        <input onChange={handleChange} type="radio" value={value} name={name} />
      </label>
    </div>
  );
};

export default Input;