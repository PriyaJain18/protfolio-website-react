import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Work from './Work'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-500'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
           Priya Jain
        </h1>
        <h4 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>
          I'm an SRE-CloudOps intern at LeadSquared Company.
          I'm also into Full stack development.
        </h4>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
         
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' >
            <a href='/portfolio'> View Work </a>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
