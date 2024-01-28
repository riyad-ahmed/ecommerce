import React from 'react';
import Menu from './Menu';

const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <header class='bg-[#fff] py-4 border-b border-[#f0f0f0] sm:px-10 px-6 font-[sans-serif] min-h-[70px] sm:ml-64'>
      <div class='flex flex-wrap items-center lg:gap-y-2 gap-y-4 gap-x-4'>
        {/* <a href="add" className='text-[40px] font-bold text-[#fff] font-[Righteous]'>
          OwlKicks
        </a> */}
        <div class='flex items-center ml-auto lg:order-1'>
          <div class="flex items-center">
            <span class="relative mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"
                class="cursor-pointer hover:fill-[#FFA726] inline-block" fill="#000">
                <path
                  d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  data-original="#000000" paintOrder="fill markers stroke"></path>
              </svg>
              <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </span>
            <input type="text" placeholder="Search something..."
              className="bg-[#e5e5e5] focus:bg-[#d8d8d8] focus:drop-shadow-sm w-full px-6 h-10 rounded outline-none text-sm"></input>
          </div>
          <button id="toggle" class='lg:hidden ml-7' onClick={() => {
            setShow(!show);
          }}>
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        {show && (
          <div class='lg:hidden w-full mt-4'>
            <Menu />
          </div>
        )}
        <div class='hidden lg:block justify-end'>
          <Menu />
        </div>
      </div>
    </header>
  );

};

export default Header;