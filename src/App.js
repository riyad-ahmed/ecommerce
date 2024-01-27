import React, { useState } from 'react';
import Login from './component/login';
import './index.css';
import Header from './component/header/header';
import Home from './component/home/home';
import Sidbar from './component/sidebar/sidbar';
// import Products from './db/data.js';
import card from './component/home/card';


const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('null');
  const [query, setQuery] = useState('');

  // ------Input filter---------


  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ------Category filter---------

  const filteredItems = Products.filter((Product) =>
    Product.toLocaleLowerCase().indexOf(query.toLowerCase() !== -1)
  );

  // --------redio filter-------

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  };

  // ------Button filter-------

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filterData(products, selected, query) {
    let filteredProducts = Products;

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
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));

  }



  return (
    <div>
      <Sidbar />
      <Login />
      <Header />
      <Home />
    </div>
  );
};

export default App;