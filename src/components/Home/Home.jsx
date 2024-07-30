import React, { useEffect } from 'react';
import homeImage from '../../assets/images/avataaars.svg';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <>
      <div className='min-h-screen pt-20 bg-emerald-400 flex justify-center items-center'>
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex flex-col justify-center items-center gap-10'>
            <div className='w-48 sm:w-52 lg:w-64'>
              <img src={homeImage} alt="Smiling Person avatar" />
            </div>
            <div className='flex flex-col items-center text-center lg:text-left'>
              <h1 className='text-white text-2xl sm:text-3xl md:text-4xl uppercase font-bold tracking-wider'>start framework</h1>
              <div className='relative gap-4 flex justify-center items-center py-4'>
                <i className="star text-white fa-solid fa-star"></i>
                <span className='right-line bg-white md:w-24 h-1 w-14'></span>
                <span className='left-line bg-white md:w-24 h-1 w-14'></span>
              </div>
              <p className="text-white text-base sm:text-lg md:text-xl">Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
