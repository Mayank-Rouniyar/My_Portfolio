import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(formData.contactNo.length!=10)
    {
      alert("The contact No must be of length 10")
      return;
    }
    try {
      const res = await axios.post(
        'https://my-portfolio-8shd.onrender.com/api/v1/clients/register',
        formData
      );
      console.log('Client Successfully registered', res.data);
      alert("Congratulations Your Info Successfully Saved")
      window.location.href = window.location.href
    } catch (error) {
      console.log("Error is ",error)
      console.log(error.status)
      if(error.status===409)
      {
        alert("The contact No is already existed")
      }
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Contact Me
      </h2>

      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
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

      <label
        htmlFor="contactNo"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
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

      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Description(Optional)
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
  );
};