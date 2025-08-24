'use client';

import React from 'react';
import FrontendLayout from '../frontend/layout';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '../frontend/components/home/HomeServices';
import LetDiscuss from '../frontend/components/home/LetDiscuss';

interface Service {
  title: string;
  description: string;
  image: string;
  path: string;
}

export default function ServicesPage() {
  return (
    <FrontendLayout>
      <div className="bg-[#eff0fa] py-12 px-4 pb-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Services</h1>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service: Service, index: number) => (
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
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-center mb-4">{service.description}</p>
                  
                  {/* Button (Styled as a button, but not a Link since the parent is already a Link) */}
                  <span className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <LetDiscuss />
    </FrontendLayout>
  );
}