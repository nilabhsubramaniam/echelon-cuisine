import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
  } from 'react-icons/fa';
  import Image from 'next/image';
import Link from 'next/link';
  import { HiOutlineMail } from 'react-icons/hi';
  
 export default function Footer() {
    const socialIcons = [
      <FaFacebookF key="facebook" className="h-6 w-6 hover:text-gray-300" />,
      <FaInstagram key="instagram" className="h-6 w-6 hover:text-gray-300" />,
      <FaTwitter key="twitter" className="h-6 w-6 hover:text-gray-300" />,
      <FaYoutube key="youtube" className="h-6 w-6 hover:text-gray-300" />,
    ];
  
    const contactInfo = [
      {
        icon: <FaPhoneAlt className="mr-2 inline-block" />,
        text: '+628123111179',
        
      },
      {
        icon: <HiOutlineMail className="mr-2 inline-block" />,
        text: 'demo@gmail.com',
      },
      { icon: <FaMapMarkerAlt className="mr-2 inline-block" />, text: 'XXX XXX' },
    ];
  
    const quickLinks = [
      'Contact Us',
      'Payment Shipping',
      'FAQs',
      'Tracking Orders',
    ];
  
    return (
      <>
        <footer className="bg-[#bd1e59] text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between px-4 py-12 sm:flex-row sm:px-6 lg:px-8 lg:py-16">
            {/* Logo and Contact Info */}
            <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
              <h2 className="text-3xl font-bold">
              <Link href="/">
              <Image
                src="/logo.jpg"
                alt="YourBrand Logo"
                width={70}  // Adjust width as necessary
                height={70} // Adjust height as necessary
                className="h-10 w-auto"
              />
            </Link>
              </h2>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Get Direction</h3>
                <ul className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <li key={index}>
                      {item.icon}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Social Icons and Quick Links */}
            <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
              <div className="flex space-x-4">
                {socialIcons}
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Newsletter Subscription */}
            <div className="flex flex-col items-end">
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  Join Our Newsletter
                </h3>
                <div className="flex">
                  <input
                    className="flex h-10 w-full rounded-md rounded-r-none border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    placeholder="Your email address"
                    type="email"
                  />
                  <button className="inline-flex h-10 items-center justify-center rounded-md rounded-l-none bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white border-opacity-20 py-4 text-center text-sm">
            © 2023 Logo. All rights reserved.
          </div>
        </footer>
      </>
    );
  }
  
  
  