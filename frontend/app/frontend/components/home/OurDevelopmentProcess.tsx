'use client';

import React from 'react';
import SectionTitle from '../SectionTitle';

interface ProcessStep {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: 'Backlog',
    description: 'All requirements will be finalized and kept in backlog. Ready...',
  },
  {
    title: 'Plan',
    description: 'It’s time to break down the project requirements into theme, epic...',
  },
  {
    title: 'Design',
    description: 'We finalize the prototype and design as per our expert mo...',
  },
  {
    title: 'Develop',
    description: 'We convert the design into functional features with our expert...',
  },
  {
    title: 'Testing',
    description: 'We present the working product to software stakeholders and...',
  },
  {
    title: 'Deploy',
    description: 'We deploy the bug free code on secure servers via pipelines...',
  },
  {
    title: 'Review',
    description: 'The released application is tested with multiple cases an...',
  },
  {
    title: 'Release',
    description: 'We present the working product to software stakeholders and...',
  },
];

const OurDevelopmentProcess: React.FC = () => {
  return (
    <section className="bg-[#eff0fa] py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Subheading */}
    


        <SectionTitle 
          title="Our Development Process"
          subtitle=" We believe in developing with agility"
          isGreyLine={true}
        />






        {/* Diagram and Process Steps */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Agile Development Diagram */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/images/development.svg"
              alt="Agile Development Process"
              className="w-full max-w-xs md:max-w-none"
            />
          </div>
          {/* Process Steps Grid */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm py-16 px-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-400 text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-black text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDevelopmentProcess;