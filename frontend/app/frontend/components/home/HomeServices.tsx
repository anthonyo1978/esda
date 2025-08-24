'use client';

import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
  path: string;
}

export const services: Service[] = [
  {
    title: 'Mobile App Development',
    description: 'We can help you build beautiful and functional android, iOS and cross platform mobile apps for next generation business.',
    image: '/images/mobile.svg',
    path: '/services/mobile-app-development',
  },
  {
    title: 'Web App Development',
    description: 'Looking to grow your business? With us you’ll be able to create an integrated web presence to support your mobile apps.',
    image: '/images/mobile.svg',
    path: '/services/web-app-development',
  },
  {
    title: 'UI/UX Design',
    description: 'User Interface and User Experience is key to developing a successful application. Our team of experts will help you create engaging and intuitive designs.',
    image: '/images/mobile.svg',
    path: '/services/ui-ux-design',
  },
  {
    title: 'Graphic Design',
    description: 'We create engaging content and meaningful experience for your target audience.',
    image: '/images/mobile.svg',
    path: '/services/graphic-design',
  },
  {
    title: 'Cloud Computing',
    description: 'Providing secured cloud computing solutions to host and maintain your data.',
    image: '/images/mobile.svg',
    path: '/services/cloud-computing',
  },
  {
    title: 'Digital Marketing',
    description: 'Helping Businesses create a solid digital presence with targeted, expert-led marketing services.',
    image: '/images/mobile.svg',
    path: '/services/digital-marketing',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Leverage cutting-edge AI and ML technologies to transform your business processes and gain valuable insights.',
    image: '/images/mobile.svg',
    path: '/services/ai-ml',
  },
  {
    title: 'Cyber Security',
    description: 'Protect your business with our comprehensive cybersecurity solutions and strategies.',
    image: '/images/mobile.svg',
    path: '/services/cyber-security',
  },
  {
    title: 'Data Analytics',
    description: 'Transform raw data into meaningful insights with your advanced data analytics services.',
    image: '/images/mobile.svg',
    path: '/services/data-analytics',
  },
  {
    title: 'Enterprise Solutions',
    description: 'Tailored solutions for large enterprises to streamline operations and boost efficiency.',
    image: '/images/mobile.svg',
    path: '/services/enterprise-solutions',
  },
  {
    title: 'Project Management',
    description: 'We can manage your project from end to end with agile methodologies to ensure that you are always on the right track.',
    image: '/images/mobile.svg',
    path: '/services/project-management',
  },
  {
    title: 'Business Solutions',
    description: 'Based on your business needs we can carry out integration world-class business solutions to make your business more professional.',
    image: '/images/mobile.svg',
    path: '/services/business-solutions',
  },
];

const HomeServices: React.FC = () => {
  const displayedServices = services.slice(0, 8);
  
  return (
    <div className="bg-[#eff0fa] py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading and Subheading */}
        <SectionTitle 
          title="Services"
          subtitle="From Strategy to Results, We'll be there from Start to End"
          isGreyLine={true}
        />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, index) => (
            <Link href={service.path} key={index}>
              <div
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-105 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center cursor-pointer h-full"
              >
                {/* Image with Dashed Circle */}
                <div className="relative mb-4 mx-auto">
                  <div className="w-40 h-40 flex items-center justify-center rounded-full border-2 border-dashed border-gray-300">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={160}
                      height={160}
                      className="rounded-full"
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-center mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>

                {/* Button (Styled as a button, but not a Link since the parent is already a Link) */}
                <span className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-8">
          <Link href="/services" className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;