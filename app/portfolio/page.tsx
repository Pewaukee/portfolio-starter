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

  const web = document.querySelectorAll('[data-type=web]');
  const ml = document.querySelectorAll('[data-type=ml]');
  const other = document.querySelectorAll('[data-type=other]');

  useEffect(() => {
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
        icons={['/svg/portfolio/music_note.svg', '/svg/portfolio/guitar.svg']}
        element={<Video src="/projects/spotify.mp4" />}
        title={'Spotify Clone'}
        text={spotifyDescription}
      />
      <Web
        icons={['/svg/portfolio/temple.svg', '/svg/portfolio/lotus.svg']}
        element={<Video src="/projects/temple.mp4" />}
        title={'Las Vegas ISKCON Temple Website'}
        text={templeDescription}
      />
      <Web
        element={<Video src="/projects/stoic.mp4" />}
        icons={['/svg/portfolio/scroll.svg']}
        title={'Stoic Student Association Website'}
        text={stoicDescription}
      />
      <Web
        icons={['/svg/portfolio/webdev_1.svg', '/svg/portfolio/webdev_2.svg']}
        element={<Video src="/projects/website.mp4" />}
        title={'Personal Website Project'}
        text={websiteDescription}
        divider={false}
      />
      
      <ML
        //TODO: won't render on first load from switching from another option
        // doesn't have to do with data-type
        element={
          <iframe
            src="https://www.kaggle.com/embed/karthikshankar12/tamil-character-recognition?kernelSessionId=140132743"
            height="400"
            style={{ margin: '0 auto', width: '100%', maxWidth: '950px' }}
            title="Tamil Character Recognition"
          ></iframe>
        }
        title={'Tamil Character Recognition'}
        text={tamilDescription}
      />
      <ML
        element={
          <iframe
            src="https://www.kaggle.com/embed/karthikshankar12/life-expectancy?kernelSessionId=140840504"
            height="400"
            style={{ margin: '0 auto', width: '100%', maxWidth: '950px;' }}
            title="Life Expectancy"
          ></iframe>
        }
        title={'Life Expectancy'}
        text={lifeExpectancyDescription}
      />
    </>
  );
}
