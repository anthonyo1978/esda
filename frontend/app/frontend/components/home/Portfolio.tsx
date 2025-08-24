'use client';

import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  title: string;
  body: string;
  webimageUrl: string;
  mobimageUrl: string;
}

const PortfolioList: PortfolioItem[] = [
  {
    title: 'Vizag Profiles',
    body:
      'Vizag Profiles is a Group of companies with over 25 years of experience in steel (handling, trading and manufacturing) Real estate and Logistics. The company has been able to set up its own unique brand and identity in the industry, which has led to unprecedented growth for the past few years.\nThe website is a dynamic responsive webapplication to manage their group of companies. The web application built with API’s has the capability of future application integrations enabling the posibility of an integrated Mobile App.',
    webimageUrl: '/images/1.svg',
    mobimageUrl: '/images/1a.svg',
  },
  {
    title: 'Visakha Pharmacity',
    body:
      'India’s most successful public & private partnership project developed by Visakha Pharmacity Ltd, a joint venture company between Ramky Group & Andhra Pradesh Industrial Infrastructure Corporation (APIIC), a Govt. of Andhra Pradesh undertaking.\nThe website is a dynamic webapplication to manage the company day to day affairs. It’s highly secure and dynamic enabling seamless integration and scalability to the company’s website.',
    webimageUrl: '/images/2.svg',
    mobimageUrl: '/images/2a.svg',
  },
  {
    title: 'F9 IT',
    body:
      'Flutter boasts of a huge open source community with many packages at pub.dev. f9it.com website was formed after being inspired by the plugins created by developers worldwide, we believe in contributing to the open source community and this website is an attempt to make reaching out to our contributions easier. The website is built using flutter as frontend to showcase that flutter is growing and adapting to it is the way forward.',
    webimageUrl: '/images/3.svg',
    mobimageUrl: '/images/3a.svg',
  },
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Auto-rotation effect
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === PortfolioList.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds in milliseconds, matching reference code
    setIntervalId(id);

    return () => clearInterval(id);
  }, []);

  // Handle manual selection (optional, can be added if needed)
  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
    if (intervalId) clearInterval(intervalId); // Reset interval on manual click
    const id = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === PortfolioList.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    setIntervalId(id);
  };

  return (
    <section className="portfolio pt-32 pb-16 ">
      <div className="mx-auto">
   
        {/* Content and Images */}
        <div className="flex flex-col md:flex-row items-start gap-8">

   

          {/* Left: Project Details */}
          <div className="w-full md:w-1/2 portfolio-content">


  {/* Heading and Subheading */}
  <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center">
            <h2 className="text-6xl font-medium text-gray-900  text-white">
              Portfolio
            </h2>
            <div className="hidden md:block flex-grow h-px bg-gray-300"></div>
          </div>
         
        </div>




            <div className="space-y-6">
              {PortfolioList.map((item: PortfolioItem, index: number) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
                  }`}
                  onClick={() => handleSlideClick(index)}
                >
                  <h3 className="text-4xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xl text-white/80 whitespace-pre-line">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Images */}
          <div className="w-full md:w-1/2 flex flex-col sm:flex-row gap-4 justify-center portfolio-images">
          
            <div className="phone w-full">
              <img
                src={PortfolioList[activeIndex].mobimageUrl}
                alt={`${PortfolioList[activeIndex].title} Mobile`}
                className="w-full rounded-lg"
              />
            </div>


            <div className="laptop w-full">
              <img
                src={PortfolioList[activeIndex].webimageUrl}
                alt={`${PortfolioList[activeIndex].title} Web`}
                className="w-full rounded-lg"
              />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;