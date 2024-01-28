import React from "react";
import Card from "./component/home/card";


const Products = ({ result }) => {
  return (
    <>
      {/* <section className="card-container">{result}</section> */}

      {/* img, title, star, reviews, newPrice, prevPrice */}

      {result.map((item) => {
        return <Card
          img={item.img}
          title={item.title}
          star={item.star}
          reviews={item.reviews}
          newPrice={item.newPrice}
          prevPrice={item.prevPrice}
        />;
      })}

    </>
  );
};

export default Products;