import React from 'react';

function VisionMission() {
  return (
    <div className="bg-blue-700 pb-16 pt-64 px-4 relative overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 720 1100" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,229.3C672,235,768,181,864,165.3C960,149,1056,171,1152,176C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/4 flex justify-center mt-4 md:mt-0">
            <figure>
              <img src="/images/our-vision.svg" alt="Vision Icon" className="w-full" />
            </figure>
          </div>
          <div className="md:w-3/4 ps-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Vision</h2>
            <p className="text-gray-600 text-base md:text-lg">
              We are about providing the powerful solutions which are simple and efficient with zero complications by receiving the goals and building the relationship with the good communication between the teams to provide long-term and updated solutions.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-3/4 pe-24">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Mission</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Providing futuristic applications with the latest technologies for both mobile and web based applications in agile method, proper project management, and selective project locations all over the world with our clients.
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center mt-4 md:mt-0">
            <figure>
              <img src="/images/our-mission.svg" alt="Mission Icon" className="w-full" />
            </figure>
          </div>
        </div>

       {/* Values Card */}
<div className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between values">
  {/* Left Column */}
  <div className="md:w-1/3">
    <ul className="text-gray-600 space-y-2 text-base md:text-lg">
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Passion
      </li>
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Employee Satisfaction
      </li>
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Integrity
      </li>
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Humble
      </li>
    </ul>
  </div>

  {/* Center Image */}
  <div className="md:w-1/3 flex justify-center my-4 md:my-0">
    <figure>
      <img src="/images/values.svg" alt="Values" />
    </figure>
  </div>

  {/* Right Column */}
  <div className="md:w-1/3">
    <ul className="text-gray-600 space-y-2 text-base md:text-lg">
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Customer Focused
      </li>
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Discipline
      </li>
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Collaboration
      </li>
      <li className="flex items-center">
        <span className="w-5 h-5 text-green-500 mr-3">✔</span> Commitment
      </li>
    </ul>
  </div>
</div>




        
      </div>
    </div>
  );
}

export default VisionMission;