import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img h-96'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2  left-10 top-1/3">
                    <h1 className='text-5xl font-bold text-white text-center'>
                    Technology is best when 
                      it brings people together.     
                    </h1>
                </div>
                {/* <div className="absolute flex justify-end transform -translate-y-1/2  left-1/4 right-1/4 top-1/2">
                    <p className='text-3xl text-white'>If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology.</p>
                </div> */}
                
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;