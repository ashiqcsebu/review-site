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
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleAddService}>
                        <div className="card-body">


                     <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                    <input type="text" name='name' required placeholder="Enter Service name" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                            <input type="ling" name='img' required placeholder="Enter photoURL" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" name='price'  required  placeholder="Enter price amount" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" name='rating'  required  placeholder="Enter Rating" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                        <textarea className='border-4' name="description" placeholder='Write a description' id="" cols="30" rows="10"></textarea>
                            </div>

                            <button className="btn btn-accent">Add Service</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;







