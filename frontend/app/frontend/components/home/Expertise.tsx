'use client';

import React from 'react';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';

const technologies = [
  { name: 'Vue.js', src: '/images/flutter.svg' },
  { name: 'Flutter', src: '/images/flutter.svg' },
  { name: 'HTML', src: '/images/flutter.svg' },
  { name: 'React', src: '/images/flutter.svg' },
  { name: 'Adobe XD', src: '/images/flutter.svg' },
  { name: 'PHP', src: '/images/flutter.svg' },
  { name: 'Firebase', src: '/images/flutter.svg' },
  { name: 'Angular', src: '/images/flutter.svg' },
  { name: 'Magento', src: '/images/flutter.svg' },
  { name: 'Drupal', src: '/images/flutter.svg' },
  { name: 'WordPress', src: '/images/flutter.svg' },
  { name: 'HTML5', src: '/images/flutter.svg' },
];

const Expertise: React.FC = () => {
  return (
    <section className="bg-white py-32 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Link Row */}



        <SectionTitle 
          title="Expertise"
          subtitle="Need any help with these technologies? Give us a buzz"
          isGreyLine={false}
        />




    
        {/* Technology Logos */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.src}
              alt={`${tech.name} Logo`}
              className="h-10 md:h-12 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;