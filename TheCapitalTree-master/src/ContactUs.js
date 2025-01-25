import React, { useState } from 'react';
import './ContactUs.css';  // Import the CSS for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // You can add further logic to handle the form submission here (e.g., sending data to a server).
  };

  return (
    <div className="contact-page">
      <section className="contact py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have any questions or need assistance? Feel free to reach out to us!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>

          {formSubmitted && (
            <p className="mt-4 text-green-500">
              Thank you for your message! We will get back to you soon.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
