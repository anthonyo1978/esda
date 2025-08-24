'use client';
import React from 'react';

interface SectionTitleProps {
  title: string; 
  subtitle: string;
  isGreyLine?: boolean; // Optional prop to determine line color
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, isGreyLine = true }) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center mb-12 section-title ${isGreyLine ? 'grey-line' : 'white-line'}`}>
      <div className="flex items-center w-full md:w-auto">
        <h2 className="text-6xl font-medium text-gray-900 mr-4">
          {title}
        </h2>
        <div className="hidden md:block flex-grow h-px bg-gray-300"></div>
      </div>
      <p className="text-blue-600 text-sm md:text-base mt-4 md:mt-0">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;