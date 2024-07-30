import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-700 text-white p-11">
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='flex flex-col md:flex-row'>
            <div className='w-full text-center md:w-1/3'>
              <div className='h-full py-5 flex flex-col gap-2 items-center'>
                <h3 className='uppercase text-3xl'>location</h3>
                <p className='mb-2'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className='w-full text-center md:w-1/3'>
              <div className='h-full flex py-5 flex-col gap-2 items-center'>
                <h3 className='uppercase text-3xl'>around the web</h3>
                <ul className='flex gap-2'>
                  <li className='border-y border-x border-solid border-slate-400 rounded-full w-10 h-10 flex justify-center items-center'><i className="p-4 fa-brands fa-facebook-f"></i></li>
                  <li className='border-y border-x border-solid border-slate-400 rounded-full w-10 h-10 flex justify-center items-center'><i className="p-4 fa-brands fa-twitter"></i></li>
                  <li className='border-y border-x border-solid border-slate-400 rounded-full w-10 h-10 flex justify-center items-center'><i className="p-4 fa-brands fa-linkedin"></i></li>
                  <li className='border-y border-x border-solid border-slate-400 rounded-full w-10 h-10 flex justify-center items-center'><i className="p-4 fa-solid fa-globe"></i></li>
                </ul>
              </div>
            </div>
            <div className='w-full text-center md:w-1/3'>
              <div className='h-full flex py-5 flex-col gap-2 items-center'>
                <h3 className='uppercase text-3xl'>about freelancer</h3>
                <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='bg-slate-900 text-center py-5'>
        <p className='text-white'>Copyright &copy; Your Website 2021</p>
      </div>
    </>
  )
}
