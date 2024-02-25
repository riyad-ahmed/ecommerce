import React from 'react';
import Input from './input';

const Price = ({ handleChange }) => {
  return (
    <div>
      <h1 className='text-[#FFA726] text-lg'>Price----</h1>
      <div>
        <label className=''>
          <Input
            onChange={handleChange}
            type="radio"
            value=""
            title="All"
            name="test"
          />
        </label>
          <Input
          handleChange={handleChange}
          value={50}
          title="$0-50"
          name="test"
          />
          <Input
          handleChange={handleChange}
          value={100}
          title="50-100"
          name="test"
          />
          <Input
          handleChange={handleChange}
          value={150}
          title="100-150"
          name="test"
          />
          <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test"
          />
      </div>
    </div>
    
  );
};

export default Price;