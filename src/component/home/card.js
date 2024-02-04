import React from 'react';
import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <>
      <section className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a href="add" className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>
          <img src={img} alt={title} className="card-img" />
        </a>
        <div className="mt-4 px-5 pb-5">
          <h3 className="text-xl tracking-tight text-slate-900">{title}</h3>
          <div className='mt-2 mb-5'>
            <section className="card-reviews flex items-center">
              {star} {star} {star} {star}
              <span className="total-reviews">{reviews}</span>
            </section>

            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <BsFillBagFill className="bag-icon" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

