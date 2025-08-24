import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      {/* Footer Top: Logo and Social Icons */}
      <div className="footer-top py-12">
        <div className="max-w-screen-xl mx-auto px-4">



        <div className="flex flex-col md:flex-row items-end">
            <Link href="/" className="mb-6 md:mb-0 w-full md:w-1/4">
    <figure className="footer-logo">
      <Image
        src="/images/logo.svg"
        alt="F9 Info Tech Logo"
        width={150}
        height={40}
        className="w-[150px]"
        priority
      />
    </figure>
  </Link>
  <div className="social-icons flex space-x-4 w-full md:w-3/4 align-center justify-center">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1A2E5A] hover:text-blue-400 transition-colors"
      aria-label="Facebook"
    >
      <i className="fab fa-facebook-f w-6 h-6 text-2xl"></i>
    </a>
    <a
      href="https://x.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1A2E5A] hover:text-blue-400 transition-colors"
      aria-label="Twitter"
    >
      <i className="fab fa-x-twitter w-6 h-6 text-2xl"></i>
    </a>
    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#1A2E5A] hover:text-blue-400 transition-colors"
      aria-label="Instagram"
    >
      <i className="fab fa-instagram w-6 h-6 text-2xl"></i>
    </a>
  </div>
</div>





        </div>
      </div>

      {/* Footer Bottom: Services, Solutions, Links, and Contact */}
      <div className="footer-bottom bg-[#1A2E5A] text-white pt-12 pb-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">Services</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Mobile App Development</li>
                <li>Web App Development</li>
                <li>Digital Marketing</li>
                <li>Graphic Designing</li>
                <li>UI/UX Designing</li>
                <li>Business Solutions</li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">Solutions</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>F9 CRM</li>
                <li>Association Management</li>
                <li>Flutter CMS</li>
                <li>PR CMS</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>
                  <Link href="/open-source" className="hover:text-blue-400 transition-colors">
                    Open Source
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-blue-400 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="hover:text-blue-400 transition-colors">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="/expertise" className="hover:text-blue-400 transition-colors">
                    Our Expertise
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-blue-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-blue-400 transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">Contact</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>+91 891 969 3567</li>
                <li>support@f9tech.com</li>
                <li className="mt-2">
                  Vinayagar Heights, Sampath Vinayaka<br />
                  Temple Road Waltair Uplands, Opp. Kalyan<br />
                  Jewellers Visakhapatnam - 530003, Andhra<br />
                  Pradesh (INDIA)
                </li>
              </ul>
            </div>
          </div>
        </div>


 {/* Site Map: Partners and Copyright */}
 <div className="site-map  text-center">
        <div className="max-w-screen-xl mx-auto px-4 border-t border-white pt-6">
              <p className="text-sm text-white">
                &copy; {new Date().getFullYear()} F9 Info Technologies Pvt Ltd. All Rights Reserved
              </p>
        </div>
      </div>



      </div>

     
    </footer>
  );
}

export default Footer;