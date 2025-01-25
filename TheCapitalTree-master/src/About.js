import React from 'react';
import './About.css';  // Import the CSS file for this page

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">About Us</h2>
          <p className="text-lg text-gray-700">
            The Capital Tree is a financial platform dedicated to helping individuals and businesses grow and manage their financial goals.
            We provide easy-to-use tools and resources to help you succeed.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At The Capital Tree, our mission is to empower individuals and businesses to take control of their financial future by providing them with intuitive tools, personalized advice, and resources that make financial growth easy and accessible.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <ul className="list-disc text-lg text-gray-700 max-w-3xl mx-auto">
            <li>Integrity - We uphold the highest ethical standards and act with honesty in everything we do.</li>
            <li>Innovation - We continuously strive to improve and find innovative ways to meet our customers' needs.</li>
            <li>Customer-Centric - We put our customers at the heart of everything, ensuring their success is our success.</li>
            <li>Collaboration - We believe in the power of teamwork and collaboration to achieve greater outcomes.</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="team py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
          <div className="flex justify-center gap-8">
            <div className="team-member w-1/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="team-member w-1/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>
            <div className="team-member w-1/4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Brown</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
