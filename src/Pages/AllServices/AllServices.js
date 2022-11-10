import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UseTitle from '../../UseTitle/UseTitle';
import AllServicesCard from './AllServicesCard';


const AllServices = () => {
    UseTitle('Services')
    const { loading} = useContext(AuthContext);
    if(loading) {
        <button type="button" class="bg-indigo-500 ..." disabled>
                <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                 </svg>
         Processing...
      </button>
        // return <h1 className='text-5xl'>Loading...</h1>
    }


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
           
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
                
            </div>
         
            
        </div>
    );
};

export default AllServices;