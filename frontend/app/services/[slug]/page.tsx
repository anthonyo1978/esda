'use client';

import React from 'react';
import FrontendLayout from '../../frontend/layout';
import { services } from '../../frontend/components/home/HomeServices';
import Image from 'next/image';
import Link from 'next/link';
import LetDiscuss from '../../frontend/components/home/LetDiscuss';

interface ServiceDetailsProps {
  params: Promise<{ slug: string }>;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ params }) => {
  // Unwrap the params Promise using React.use()
  const { slug } = React.use(params);

  // Find the service using the unwrapped slug
  const service = services.find(s => s.path === `/services/${slug}`);

  if (!service) {
    return (
      <FrontendLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you are looking for doesn't exist.</p>
            <Link href="/services" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Back to Services
            </Link>
          </div>
        </div>
      </FrontendLayout>
    );
  }

  return (
    <FrontendLayout>
      <div className="bg-[#eff0fa] py-12 px-4 pb-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">{service.title}</h1>

          {/* Service Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* Service Image */}
            <div className="relative mb-8">
              <div className="w-40 h-40 mx-auto flex items-center justify-center rounded-full border-2 border-dashed border-gray-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={160}
                  height={160}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Service Description */}
            <div className="prose max-w-none text-gray-600 mb-8">
              <p>{service.description}</p>
            </div>

            {/* Contact Button */}
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-primary text-white px-8 py-4 rounded-md hover:bg-primary-dark transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LetDiscuss />
    </FrontendLayout>
  );
};

export default ServiceDetails;