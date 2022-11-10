import React from 'react';
import UseTitle from '../../UseTitle/UseTitle';


const AddService = () => {
   UseTitle('AddServices')

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

        <section className="my-12 bg-base-200 rounded-lg">
        <div className="py-6 lg:py-4 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-5xl tracking-tight font-bold text-center text-cyan-600">Add New Services</h2>
          
            <form onSubmit={handleAddService} className="space-y-4">
                <div>
                    <label for="name" className="block mb-2 text-xl font-semibold text-gray-900 ">Enter Title</label>
                    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-base-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Type Service Title" required/>
                </div>

                <div>
                <label for="img" className="block mb-2 text-xl font-semibold text-gray-900 ">Enter Photo url</label>
                    <input type="ling" id="img" className="block p-3 w-full text-sm text-dark bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-base-700 dark:border-base-600 dark:placeholder-gray-400 text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Photo URL" required/>
                </div>


                <div>
                    <label for="price" className="block mb-2 text-xl font-semibold text-gray-900 ">Enter Price</label>
                    <input type="text" name="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-base-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Service Price" required/>
                </div>
                <div>
                    <label for="rating" className="block mb-2 text-xl font-semibold text-gray-900 ">Enter Rating</label>
                    <input type="text" name="rating" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-base-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Type Rating " required/>
                </div>

                <div className="sm:col-span-2">
                <label for="description" className="block mb-2 text-xl font-semibold text-gray-900 ">Write Short Description</label>
                    <textarea  rows="6" name="description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-base-700  dark:placeholder-gray-400 text-dark dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Short Description"></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Service</button>
            </form>
        </div>
      </section>

       
    );
};

export default AddService;







