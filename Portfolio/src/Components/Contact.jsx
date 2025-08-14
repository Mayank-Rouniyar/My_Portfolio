import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', contactNo: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://my-portfolio-8shd.onrender.com/api/v1/clients/register',
        formData
      );
      alert("Congratulations! Your info has been successfully saved.");
      setFormData({ name: '', contactNo: '', description: '' });
    } catch (error) {
      if (error.response?.status === 409) {
        alert("The contact No is already existed");
      } else {
        alert("Something went wrong. Try again later.");
      }
      console.error(error);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-20 py-10 flex justify-center">
      <div className="w-full max-w-lg">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
            Contact Me
          </h2>

          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">
            Contact No or Email
          </label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            placeholder="Enter your contact number or email"
            value={formData.contactNo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mb-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write your message here..."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 mb-6 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">Or email me directly at</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mayankrouniyar9300@gmail.com&su=Hello%20Mayank&body=Write%20your%20message%20here"
            className="text-blue-600 font-medium hover:underline"
          >
            mayankrouniyar9300@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}