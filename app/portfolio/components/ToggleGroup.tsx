'use client';

import React, { Dispatch, SetStateAction } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import Image from 'next/image';

const toggleGroupItemClasses = `hover:bg-[#6ca0e0] color-black data-[state=on]:bg-blue-500 data-[state=on]:text-black 
  flex h-[50px] w-[50px] items-center justify-center bg-black text-base leading-4 
  first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black 
  focus:outline-none`;

export default function Toggle({
  setType,
}: {
  setType: Dispatch<SetStateAction<string>>;
}) {
  return (
    <ToggleGroup.Root
      className="inline-flex bg-gray-800 rounded shadow-[0_2px_10px] shadow-black space-x-px"
      type="single"
      defaultValue="all"
      aria-label="Text alignment"
    >
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="all"
        aria-label="All Projects"
        onClick={() => setType('all')}
      >
        <h1>ALL</h1>
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="web"
        aria-label="Web Development Projects"
        onClick={() => setType('web')}
      >
        <Image
          src="/svg/portfolio/website.svg"
          alt="website logo"
          width={40}
          height={40}
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="ml"
        aria-label="Machine Learning Projects"
        onClick={() => setType('ml')}
      >
        <Image
          src="/svg/portfolio/machine_learning.svg"
          alt="machine learning logo"
          width={40}
          height={40}
        />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="other"
        aria-label="Other Projects/Work"
        onClick={() => setType('other')}
      >
        <h1>Other</h1>
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
