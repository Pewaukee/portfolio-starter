'use client';

import React from 'react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function DefaultCarousel() {
  return (
    <Carousel pauseOnHover={true}>
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt="carousel-1"
        width={400}
        height={400}
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        alt="carousel-2"
        width={400}
        height={400}
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        alt="carousel-3"
        width={400}
        height={400}
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        alt="carousel-4"
        width={400}
        height={400}
      />
      <Image
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        alt="carousel-5"
        width={400}
        height={400}
      />
    </Carousel>
  );
}
