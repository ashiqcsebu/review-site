import React from 'react';

const Faq = () => {
    return (
        <div>
       <h1 className='text-5xl text-cyan-600 font-bold my-8 text-center'>Frequently Asked Question</h1>

            
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        <p className='text-xl'> May I know the vision of BookWorm? </p> 
        </div>
        <div className="collapse-content"> 
        <p className='text-xl'>Ahh, Sure. Why Not? We are working on the vision of making a world of Technology. We wanna stand hand in hand to skill up the vigorous people for the betterment of next generation </p>
        </div>
        </div>

        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        <p className='text-xl text-black'> Do you Provide your Services Physically? </p> 
        </div>
        <div className="collapse-content"> 
        <p className='text-xl '>Sorry, We are online based platform to serve the people not only nationwide but also worldwide. </p>
        </div>
        </div>


        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        <p className='text-xl'> Why can't I leave my review? </p> 
        </div>
        <div className="collapse-content"> 
        <p className='text-xl'>Ahh, So Sad. We beg your kind attention to sign up to our site at first. If you already signed up/ Logged in then you can Leave a Review.Thank You </p>
        </div>
        </div>


        </div>
    );
};

export default Faq;