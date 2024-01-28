import React, { useState } from 'react';
import Login from './component/login';
import './index.css';
import Header from './component/header/header';
import Home from './component/home/home';
import Sidbar from './component/sidebar/sidbar';
import Data from './db/data.js';
import Card from './component/home/card.js';


const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [query, setQuery] = useState('');

  // ------Input filter---------


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ------Category filter---------

  const filteredItems = Data.filter((Product) =>
    Product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
  );

  // --------redio filter-------

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------Button filter-------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterData(data, selected, query) {
    let filteredProducts = data;

    // filtaring input items
    if (query) {
      filteredProducts = filteredItems
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, title, newPrice }) =>

          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      );
    }
    return filteredProducts;

  }


  const result = filterData(
    Data, selectedCategory, query);
  console.log('result', result)

  // ------Add to card-------
  const addToCard = (event) => {
    console.log('add to card', event.target.value)
  }

  return (
    <div>
      <Sidbar handleChange={handleChange} />
      <Login />
      <Header query={query} handleInputChange={handleInputChange} />
      <Home result={result} handleClick={addToCard} />
      {/* <Products result={result} /> */}
    </div>
  );
};

export default App;