import React from 'react';
 import Faq from './Faq/Faq';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import UseTitle from '../../UseTitle/UseTitle';

const Home = () => {
    UseTitle('BookWorm')
    return (
        <div>

            <Banner></Banner>

            <Services></Services>

             <Faq></Faq> 
        </div>
    );
};

export default Home;