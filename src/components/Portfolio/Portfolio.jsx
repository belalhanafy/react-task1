import React, { useEffect, useState } from 'react';
import house from '../../assets/images/poert1.png';
import cake from '../../assets/images/port2.png';
import house2 from '../../assets/images/port3.png';
import { Helmet } from 'react-helmet';

export default function Portfolio() {
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const showImage = (image) => {
        setCurrentImage(image);
        setOverlayVisible(true);
    };

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    useEffect(() => {
        document.title = 'Portfolio';
    }, []);

    return (
        <>
        
            {overlayVisible && (
                <div onClick={hideOverlay}>
                    <div className='absolute z-10 top-0 bottom-0 right-0 left-0 bg-blue-950 opacity-55'></div>
                    <div className='rounded-3xl fixed flex justify-center items-center z-20 w-full h-full'>
                        <img className='w-[400px] sm:w-[600px] rounded-xl' src={currentImage} alt="" />
                    </div>
                </div>
            )}
            <div className='pt-20'>
                <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='flex flex-col items-center text-center'>
                        <h1 className='pt-6 text-slate-800 text-4xl uppercase font-bold tracking-wider'>portfolio component</h1>
                        <div className='relative gap-4 flex justify-center items-center py-4'>
                            <i className="star text-slate-800 fa-solid fa-star"></i>
                            <span className='right-line bg-slate-800 h-1 w-14'></span>
                            <span className='left-line bg-slate-800 h-1 w-14'></span>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6'>
                        <div onClick={() => showImage(house)} className='pos relative cursor-pointer'>
                            <div className='text-9xl rounded-2xl green-layout'>+</div>
                            <img className='rounded-2xl w-full block' src={house} alt="house" />
                        </div>
                        <div onClick={() => showImage(cake)} className='pos relative cursor-pointer'>
                            <div className='text-9xl rounded-2xl green-layout'>+</div>
                            <img className='rounded-2xl w-full block' src={cake} alt="cake" />
                        </div>
                        <div onClick={() => showImage(house2)} className='relative cursor-pointer pos'>
                            <div className='text-9xl rounded-2xl green-layout'>+</div>
                            <img className='rounded-2xl w-full block' src={house2} alt="house" />
                        </div>
                        <div onClick={() => showImage(house)} className='relative cursor-pointer pos'>
                            <div className='text-9xl rounded-2xl green-layout'>+</div>
                            <img className='rounded-2xl w-full block' src={house} alt="house" />
                        </div>
                        <div onClick={() => showImage(cake)} className='relative cursor-pointer pos'>
                            <div className='text-9xl rounded-2xl green-layout'>+</div>
                            <img className='rounded-2xl w-full block' src={cake} alt="cake" />
                        </div>
                        <div onClick={() => showImage(house2)} className='relative cursor-pointer pos'>
                            <div className='text-9xl rounded-2xl green-layout'>+</div>
                            <img className='rounded-2xl w-full block' src={house2} alt="house" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
