import React from 'react';
import './Services.css';  // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-page">
      {/* Services Section */}
      <section className="services py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <p className="text-lg text-gray-700 mb-12">
          we create custom websites that combine innovation and functionality. Our team is dedicated to building visually stunning, user-friendly websites that help your business grow online.
          </p>
          
          {/* Service Cards */}
          <div className="services-container flex justify-center gap-8">
            {/* Service Card 1 */}
            <div className="service-card w-1/3 p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Website Design</h3>
              <p className="text-gray-600">
              We create tailor-made websites that are visually appealing, responsive, and aligned with your brand’s identity to engage and convert visitors.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="service-card w-1/3 p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">E-commerce Development</h3>
              <p className="text-gray-600">
              We design and develop secure, scalable, and user-friendly e-commerce platforms that help you grow your online store and drive sales.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="service-card w-1/3 p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">SEO & Digital Marketing</h3>
              <p className="text-gray-600">
              We optimize your website for search engines and provide strategic digital marketing services to increase visibility and attract targeted traffic.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
