import React, { useEffect } from 'react'
export default function Contact() {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  return (
    <>
      <div className='pt-20'>
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex flex-col items-center pb-15 text-center'>
              <h1 className='pt-6 text-slate-800 text-4xl uppercase font-bold tracking-wider'>conatct section</h1>
              <div className='relative gap-4 flex justify-center items-center py-4'>
                  <i className="star text-slate-800 fa-solid fa-star"></i>
                  <span className='right-line bg-slate-800 h-1 w-14'></span>
                  <span className='left-line bg-slate-800 h-1 w-14'></span>
              </div>
          </div>
        </div>
        <div className='max-w-4xl container mx-auto px-4 sm:px-6 lg:px-8'>
          <form className='py-10'>
            <input type="text" className="mb-10 bg-transparent border border-gray-300 text-sm rounded-lg block w-full p-3 outline-none border-b border-b-slate-800 dark:border-gray-600 dark:placeholder-gray-400 text-black" placeholder="UserName" />
            <input type="number" className=" mb-10 bg-transparent border border-gray-300 text-sm rounded-lg block w-full p-3 outline-none border-b border-b-slate-800 dark:border-gray-600 dark:placeholder-gray-400 text-black" placeholder="UserAge" />
            <input type="email" className=" mb-10 bg-transparent border border-gray-300 text-sm rounded-lg block w-full p-3 outline-none border-b border-b-slate-800 dark:border-gray-600 dark:placeholder-gray-400 text-black" placeholder="UserEmail" />
            <input type="password" className="mb-5 bg-transparent border border-gray-300 text-sm rounded-lg block w-full p-3 outline-none border-b border-b-slate-800 dark:border-gray-600 dark:placeholder-gray-400 text-black" placeholder="UserPassword" />
            <button className='bg-green-500 text-white py-2 px-3 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}
