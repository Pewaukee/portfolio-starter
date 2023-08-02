'use client';

import { X } from 'lucide-react';
import React, { useState } from 'react';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`${open ? 'hidden': 'flex' } flex-col space-y-2 mr-6`}
        onClick={() => setOpen(!open)}
      >
        <span className="block h-1 w-8 bg-gray-200"></span>
        <span className="block h-1 w-8 bg-gray-200"></span>
        <span className="block h-1 w-8 bg-gray-200"></span>
      </div>
      <div
        className={
          open
            ? 'block aboslute w-[150px] h-[500px] top-0 left-0 bg-gray-600 z-50 flex flex-col justify-evenly items-center'
            : 'hidden'
        }
      >
        <div
          className="absolute top-0 right-0 px-5 py-6"
          onClick={() => setOpen(false)} // change isNavOpen state to false to close the menu
        >
          <X size={42}/>
        </div>
        <ul className="flex flex-col items-center justify-center mx-10 mt-[200px]">
          <li className="uppercase mb-[25px]">
            <a href="/about">Home</a>
          </li>
          <li className="uppercase mb-[25px]">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="uppercase">
            <a href="/posts">Posts</a>
          </li>
        </ul>
      </div>
    </>
  );
}
