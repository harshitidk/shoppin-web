import React from 'react';
import Straw from '../assets/strawberry.png'

const avatars = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',
  'https://randomuser.me/api/portraits/men/4.jpg',
  'https://randomuser.me/api/portraits/men/5.jpg',
];

export default function About() {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden font-[CircularStd]">
      {/* Left icon */}
      <div className="absolute top-[120px] left-[90px]">
        <img src="/vite.svg" alt="logo" className="w-10 h-10 bg-gray-100 rounded-full p-2 shadow-lg" />
      </div>

      {/* Avatars top right */}
      <div className="absolute top-[60px] right-[90px] flex items-center gap-[-10px] bg-gray-100 rounded-full px-4 py-2 shadow-lg">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="avatar"
            className="w-8 h-8 rounded-full border-2 border-white -ml-2 first:ml-0"
            style={{ zIndex: 10 - i }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-start">
        {/* Masked heading with image */}
        <h1
          className="text-5xl font-black mb-6"
          style={{
            letterSpacing: '1px',
            backgroundImage: `url(${Straw})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // Force override any inherited color
            // @ts-ignore
            '--tw-text-opacity': '1',
          }}
        >
          the future of fashion
        </h1>
        <div className="text-[#444] text-xl font-normal mb-2">meet shoppin'- your fashion bestie!</div>
        <div className="text-[#444] text-xl font-normal mb-2">search for a vibe.</div>
        <div className="text-[#444] text-xl font-normal mb-2">any aesthetic. any occasion. any mood.</div>
        <div className="text-[#444] text-xl font-normal mb-2">we bring to you the best options - across trends and brands.</div>
        <div className="text-[#444] text-xl font-normal">no gatekeeping, no chaos - just fashion that feels like you.</div>
      </div>

      {/* Bottom right text */}
      <div className="absolute bottom-[100px] right-[90px] text-[#222] text-4xl font-medium text-right opacity-80 leading-tight">
        organize<br />your favourites
      </div>
    </div>
  );
}
