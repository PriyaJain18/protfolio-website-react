import React from 'react';
import '../cssstyles.css'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[100px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>Hi. I'm Priya, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am a focused Computer Science undergrad aiming to
              leverage my Cloud and web development knowledge for the development of society 
              and willing to get exposure to enhance my skill set and knowledge.
            </p>
          </div>
        </div>

        <div className='lastAbout'>
        <span>

        <h4> Education : Lovely professional University</h4>
        
        </span>
          </div>
      </div>
    </div>
  );
};

export default About;
