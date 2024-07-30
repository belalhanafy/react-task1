import React, { useEffect } from 'react'

export default function About() {
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <>
            <div className='min-h-screen pt-20 bg-emerald-400 flex justify-center items-center'>
                <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='text-white text-4xl uppercase font-bold tracking-wider'>About Component</h1>
                            <div className='relative flex justify-center items-center py-4'>
                                <i className="star text-white fa-solid fa-star"></i>
                                <span className='right-line bg-white md:w-24 h-1 w-14'></span>
                                <span className='left-line bg-white md:w-24 h-1 w-14'></span>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-evenly'>
                            <p className='w-full text-center md:text-left md:w-5/12 text-white'>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                            <p className='w-full text-center md:text-left md:w-5/12 text-white'>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
