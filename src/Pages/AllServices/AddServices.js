import React from 'react';
// import UseTitle from '../../Hooks/UseTitle';

const AddService = () => {
    // UseTitle('service')

    const handleAddService = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        var ts = new Date().getTime();

        const services = {
            service_name: name,
            img: img,
            price: price,
            rating: rating,
            description: description,
            ts
        }

        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('you have added succesfuly')
                }

            })

    }

    return (

<div className="hero bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse ">
<form onSubmit={handleAddService}>
        <h2 className="text-4xl font-semibold text-cyan-600 mb-6">Add New Services </h2>
       
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
     <input type="text" name='name' required placeholder="Enter Service name" className="input input-bordered  "/> <br></br>
    <input type="ling" name='img' required placeholder="Enter photoURL" className="input input-bordered" /> <br />
    <input type="text" name='price'  required  placeholder="Enter price amount" className="input input-bordered"/> <br />
    <input type="text" name='rating'  required  placeholder="Enter Rating" className="input input-bordered" />
        </div>
        <br />
        <textarea className='border-4' name="description" placeholder='Write a description' id="" cols="50" rows="10"></textarea>
      
<br />
<button className="btn btn-accent mt-6 bg-cyan-600">Submit</button>
    </form>

</div>

</div>





       
    );
};

export default AddService;







