import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllServicesCard from './AllServicesCard';
// import { Link } from 'react-router-dom';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/allservices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4 mt-6'>
               
                <h2 className="text-5xl font-bold text-cyan-600">Our Services</h2>
                {/* <p>thffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.e majority have su </p> */}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
                
            </div>
            {/* <div className="mt-8 mb-6 flex justify-center">
                 <Link to={`/services`}>
                       <button className="btn bg-cyan-600 ">See All Services</button>
                </Link>
           </div> */}
            
        </div>
    );
};

export default AllServices;