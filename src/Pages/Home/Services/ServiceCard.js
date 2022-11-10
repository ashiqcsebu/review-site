import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({service}) => {
    const {_id , img, price, rating , service_name,description} = service;
    return (
        <PhotoProvider>      
        <div className="card card-compact w-96 bg-base-100 shadow-xl justify-center">
            <figure>
        
                <PhotoView src= {img}> 
                   <img src={img} className="h-full w-11/12 rounded-xl" alt="Shoes" />
              </PhotoView>
                
                </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold">{service_name}</h2>
                <h2 className='text-xl text-orange-600 font-semibold'>Price: ${price}</h2>
                <h2 className='text-xl text-orange-600 font-semibold'>Rating:{rating}</h2>

                <h2 className='text-xl'>
                    {
                        description.length > 100 ?
                            <>
                            {description.slice(0, 100) + '.....'} 
                         
                            </>
                            :
                            description
                    }
                </h2>
                <div className="card-actions justify-end">
               
                    <Link to={`/services/${_id}`}>
                       <button className="btn bg-cyan-600">Details</button>
                    </Link>
                </div>
            </div>
        </div>
        </PhotoProvider>
    );
};

export default ServiceCard;