'use client';

import React from 'react';
import Link from 'next/link';

const LetDiscuss: React.FC = () => {
  return (
    <section className="bg-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white-100 rounded-lg shadow-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center border-gray-300 border">
          {/* Content */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Let’s discuss your next Project
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-2">
              We're eager to hear your plans and help you get started.
            </p>
            <p className="text-gray-500 text-xs">
              Last updated: 12:09 PM IST on Friday, May 16, 2025
            </p>
          </div>
          {/* Button */}
          <Link href="/contact">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Talk to Expert
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetDiscuss;