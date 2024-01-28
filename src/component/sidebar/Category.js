import React from 'react';
import Input from './input';


const Category = ({ handleChange }) => {
  return (
    <div>
      <h1 className='text-[#FFA726] text-lg'>Category----</h1>

      <div className=''>
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
          value="sneaker"
          title="Sneaker"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;