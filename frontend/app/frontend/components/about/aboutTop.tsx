import React from 'react';

function AboutTop() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col md:flex-row items-center justify-between px-2 md:px-12 gap-8">
          {/* Text Section */}
          <div className="md:w-2/3 space-y-4 z-10 pe-0 md:pe-12 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building bridges between companies and customers over 16 Years
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              We at F9 make sure our clients and employees grow along with the growth of the company by providing a great and unique work-life culture in the industry.
            </p>
          </div>

          {/* Image and Logo Section */}
          <div className="md:w-1/3 relative mt-6 md:mt-0 animate-fadeIn">
            <figure>
              <img
                src="/images/f9-image.svg"
                alt="F9 Image"
                className="w-full "
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTop;