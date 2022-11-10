import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            

            <section className=" bg-base-200">
  <div className="py-2 lg:py-4 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-5xl tracking-tight font-bold text-center text-cyan-600">Contact Us</h2>
      <p className="mb-4 lg:mb-16 font-light text-center text-dark sm:text-xl">Got a technical issue? Let us know.</p>
      <form  className="space-y-4">
          <div>
              <label for="email" className="block mb-2 text-xl font-semibold text-gray-900 ">Enter Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-base-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="contact@bookworm.com" required/>
          </div>
          <div>
          <label for="text" className="block mb-2 text-xl font-semibold text-gray-900 ">Subject</label>
          <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-base-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Issue in Short" required/>
          </div>
          <div className="sm:col-span-2">
          <label for="text" className="block mb-2 text-xl font-semibold text-gray-900 ">Write us in Details</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-dark bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-base-700  text-gray-900  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className="card-actions justify-center">
                    <Link to='/'>
                       <button className="btn bg-cyan-600">Send Message</button>
                    </Link>
                </div>
      </form>
  </div>
</section>


        </div>
    );
};

export default ContactUs;