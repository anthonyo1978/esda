import React from 'react';
import CompanyDetails from '../CompanyDetails';

function Statistics() {
  return (
    <CompanyDetails>
      {({ companyAge, avgExperience }) => (
        <div className="bg-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
              {/* Industry Experience */}
              <div className="flex-1 text-center border-r md:border-r-gray-300 md:last:border-r-0">
                <h3 className="text-sm md:text-base uppercase font-medium text-gray-700 tracking-wide mb-2">
                  Industry Experience
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-blue-500">{companyAge} years</p>
              </div>

              {/* Team Strength */}
              <div className="flex-1 text-center border-r md:border-r-gray-300 md:last:border-r-0">
                <h3 className="text-sm md:text-base uppercase font-medium text-gray-700 tracking-wide mb-2">
                  Team Strength
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-blue-500">20 +</p>
              </div>

              {/* Avg. years of Experience */}
              <div className="flex-1 text-center border-r md:border-r-gray-300 md:last:border-r-0">
                <h3 className="text-sm md:text-base uppercase font-medium text-gray-700 tracking-wide mb-2">
                  Avg. years of Experience
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-blue-500">{avgExperience} years</p>
              </div>

              {/* Clients */}
              <div className="flex-1 text-center border-r md:border-r-gray-300 md:last:border-r-0">
                <h3 className="text-sm md:text-base uppercase font-medium text-gray-700 tracking-wide mb-2">
                  Clients
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-blue-500">500 +</p>
              </div>

              {/* Websites Developed */}
              <div className="flex-1 text-center">
                <h3 className="text-sm md:text-base uppercase font-medium text-gray-700 tracking-wide mb-2">
                  Websites Developed
                </h3>
                <p className="text-3xl md:text-4xl font-bold text-blue-500">1000 +</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </CompanyDetails>
  );
}

export default Statistics;