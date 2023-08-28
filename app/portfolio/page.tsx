'use client';

import React, { useEffect, useState } from 'react';
import Toggle from './components/ToggleGroup';
import Web from './components/Web';
import {
  lifeExpectancyDescription,
  spotifyDescription,
  stoicDescription,
  tamilDescription,
  templeDescription,
  websiteDescription,
} from '../../data/descriptions';
import Video from './components/Video';
import ML from './components/ML';

export default function Portfolio() {
  const [type, setType] = useState('all');

  useEffect(() => {
    const web = document.querySelectorAll('[data-type=web]');
    const ml = document.querySelectorAll('[data-type=ml]');
    const other = document.querySelectorAll('[data-type=other]');
    if (type === 'all') {
      web.forEach((w) => {
        w.classList.remove('hidden');
      });
      ml.forEach((m) => {
        m.classList.remove('hidden');
      });
      other.forEach((o) => {
        o.classList.remove('hidden');
      });
    } else if (type === 'web') {
      web.forEach((w) => {
        w.classList.remove('hidden');
      });
      ml.forEach((m) => {
        m.classList.add('hidden');
      });
      other.forEach((o) => {
        o.classList.add('hidden');
      });
    } else if (type === 'ml') {
      web.forEach((w) => {
        w.classList.add('hidden');
      });
      ml.forEach((m) => {
        m.classList.remove('hidden');
      });
      other.forEach((o) => {
        o.classList.add('hidden');
      });
    } else if (type === 'other') {
      web.forEach((w) => {
        w.classList.add('hidden');
      });
      ml.forEach((m) => {
        m.classList.add('hidden');
      });
      other.forEach((o) => {
        o.classList.remove('hidden');
      });
    }
  }, [type]);

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-gray-600 py-8">
        <h1 className="text-2xl mb-[10px]">Welcome to my Portfolio!</h1>
        <Toggle setType={setType} />
      </div>
      <Web
        element={<Video src="/projects/spotify.mp4" />}
        icons={['/svg/portfolio/music_note.svg', '/svg/portfolio/guitar.svg']}
        title={'Spotify Clone'}
        text={spotifyDescription}
      />
      <Web
        element={<Video src="/projects/temple.mp4" />}
        icons={['/svg/portfolio/temple.svg', '/svg/portfolio/lotus.svg']}
        title={'Las Vegas ISKCON Temple Website'}
        text={templeDescription}
      />
      <Web
        element={<Video src="/projects/ssa.mp4" />}
        icons={['/svg/portfolio/scroll.svg']}
        title={'Stoic Student Association Website'}
        text={stoicDescription}
      />
      <Web
        icons={['/svg/portfolio/webdev_1.svg', '/svg/portfolio/webdev_2.svg']}
        element={<Video src="/projects/website.mp4" />}
        title={'Personal Website Project'}
        text={websiteDescription}
      />
      <ML
        iframe={'/html/tamil.html'}
        title={'Tamil Character Recognition'}
        text={tamilDescription}
      />
      <ML
        iframe={'/html/life_expectancy.html'}
        title={'Life Expectancy Prediction'}
        text={lifeExpectancyDescription}
      />
    </>
  );
}
