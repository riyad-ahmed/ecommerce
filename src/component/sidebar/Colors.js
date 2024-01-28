import React from 'react';
import Input from './input';

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h1 className='text-[#FFA726] text-lg'>Color----</h1>
      <div className='input text-sm text-black w-48 m-auto'>
        <label className='flex justify-between p-1'>
          <span>All</span>
          <input type="radio" name='test' />
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color='black'
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color='blue'
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color='red'
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color='green'
        />
        <label className=''>
          <Input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test2"
          />
          <span></span> White
        </label>


      </div>
    </div>
  );
};

export default Colors;