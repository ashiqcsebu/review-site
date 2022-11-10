 import React, { useContext } from 'react';
 import { useLoaderData } from 'react-router-dom';
 import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReview from '../MyReview/MyReview';




const Details = () => {
   const {_id , img, price, service_name ,rating , description} = useLoaderData();

     const { user } = useContext(AuthContext);
 const handleReview = event => {
     event.preventDefault();
    const form = event.target;
    // const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || 'unregistered';
    const message = form.message.value;
     
    var ts = new Date().getTime();
     const order = {
         service: _id,
         serviceName: service_name,
         customer: email,
         email,
         message,
         ts,
     }
        

        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review Complete')
                    form.reset();
                    
        }
   })
    .catch(er => console.error(er));


 }

    return (

        <>
        <div className='grid grid-cols-2 gap-10'>
            <div className="card card-compact w-fit bg-base-100 shadow-xl ">
                <figure><img className='h-80 w-full' src={img} alt="" /></figure>
                    <div className=" w-fit">
                    <h2 className="card-title text-2xl font-semibold mx-4 my-4">{service_name}</h2>
                    <h2 className='text-xl text-orange-600 font-semibold mx-4'>Price: ${price}</h2>
                        <h2 className='text-xl text-orange-600 font-semibold mx-4'>Rating:{rating}</h2>
                        <h2 className='text-xl  font-semibold text-justify mx-4 my-4'>{description}</h2>
                    </div>
                </div>
        <div>  

         
             <form onSubmit={handleReview}>
                
               
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                   
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                <input className='btn' type="submit" value="Leave your Review" />
            </form> 

           
            </div>

            
        </div>

<MyReview></MyReview>
 </>
    );
};

export default Details;