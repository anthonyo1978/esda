import React from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";
// Dynamically import HeroImage with SSR disabled
const HeroImage = dynamic(() => import("./HeroImage"), {
  ssr: false,
  loading: () => <div>Loading animation...</div>,
});
function Hero() {
  return (
    <section className="hero pt-28">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h1 className="text-4xl md:text-6xl text-gray-700 mb-6">
              WE SHAPE YOUR
            </h1>
            <img
              src="/images/idea.svg"
              alt="F9 Info Technologies Idea"
              className="w-full "
            />
            <p className="text-lg text-gray-600 mb-8">
              Ideas don't make you a millionaire, the execution does. Every idea backed by an expert team can be made successful. Whether you have one great idea or 10, we would love to help.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Get Started
            </Link>
          </div>
          {/* Right Column: Lottie Animation */}
          <div>
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;