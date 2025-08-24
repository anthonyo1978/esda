'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '../SectionTitle';

interface BusinessModelItem {
  title: string;
  body: string;
  imageUrl: string;
}

const BusinessModelList: BusinessModelItem[] = [
  {
    title: 'Resource Model',
    body: 'Resource model allows you to have the benefit of an entire remote team, but with the control to meet deadlines, change directions, and create your product vision. The best part? You don’t need to invest in infrastructure for the remote team.',
    imageUrl: '/images/b1.svg',
  },
  {
    title: 'Hour Model',
    body: 'Hourly Model is a fixed hourly engagement model, which means our team is willing to work on your project for any number of hours, based on the hourly rate. This engagement model ensures that you don’t have to worry about spending unnecessary time on tasks which may not be required or desired. You can focus on what’s important to you.',
    imageUrl: '/images/b2.svg',
  },
  {
    title: 'Fixed Scope Model',
    body: 'Fixed Scope Model is perfect if you know what you want and need. It makes it easier to give a straightforward estimate and follow through with the plan strictly. In this fixed scope model, there are only the features that are planned for the app. If a new feature is needed, it is added to the scope at a later date.',
    imageUrl: '/images/b3.svg',
  },
  {
    title: 'Partnership Model',
    body: 'Do you have a great idea and a killer business plan, but not the technical knowledge or resource to implement it? We’ll be your technical partner and we’ll help you execute your project. We also partner with companies based out of India who are willing to outsource work to teams in India.',
    imageUrl: '/images/b4.svg',
  },
];

const BusinessModel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Auto-rotation effect
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === BusinessModelList.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds in milliseconds
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  // Pause auto-rotation on hover
  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId);
  };

  // Resume auto-rotation on mouse leave
  const handleMouseLeave = () => {
    const id = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === BusinessModelList.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds in milliseconds
    setIntervalId(id);
  };

  // Handle manual selection
  const handleModelClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Subheading */}
        <SectionTitle 
          title="Business Model"
          subtitle="Choose one that best fits for your next project"
          isGreyLine={false}
        />

        {/* Models and Image */}
        <div
          className="flex flex-col md:flex-row items-start gap-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Business Models */}
          <div className="w-full md:w-1/2 space-y-6">
            {BusinessModelList.map((model: BusinessModelItem, index: number) => (
              <div
                key={index}
                className={`bg-white cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-transparent bg-gray-50'
                } p-6 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-600`}
                onClick={() => handleModelClick(index)}
              >
                <h3 
                  className="text-4xl font-400 text-gray-900 mb-2 transition-colors duration-300 ease-in-out">
                  {model.title}
                </h3>
                <p 
                  className="text-gray-600 transition-colors duration-300 ease-in-out text-base">{model.body}</p>
              </div>
            ))}
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative overflow-hidden rounded-lg w-full ">
              <img
                src={BusinessModelList[activeIndex].imageUrl}
                alt={BusinessModelList[activeIndex].title}
            
                className="w-full transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;