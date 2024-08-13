import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
    FaClock,
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
  
    const businessHours = [
      {
        day: 'Sunday',
        hours: '11:00 am to 10:00 pm',
      },
      {
        day: 'Monday to Thursday',
        hours: '11:00 am to 2:30 pm, 5:00 pm - 10:00 pm',
      },
      {
        day: 'Friday & Saturday',
        hours: '11:00 am to 11:00 pm',
      },
    ];
  
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    return (
      <>
        <footer className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between px-4 py-12 sm:flex-row sm:px-6 lg:px-8 lg:py-16">
            {/* Logo and Restaurant Info */}
            <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
              <h2 className="text-3xl font-bold">
                <Link href="/">
                  <Image
                    src="/logo.jpg"
                    alt="YourBrand Logo"
                    width={70} // Adjust width as necessary
                    height={70} // Adjust height as necessary
                    className="h-10 w-auto"
                  />
                </Link>
              </h2>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Charminar Indian Restaurant & Catering</h3>
                <p className="text-base">6755 Mira Mesa Blvd 113</p>
                <p className="text-base">San Diego, CA 92121</p>
              </div>
            </div>
  
            {/* Business Hours */}
            <div className="flex flex-col items-end">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 flex items-center">
                  <FaClock className="mr-2" />
                  Business Hours
                </h3>
                <ul className="space-y-2 text-gray-800">
                  {businessHours.map((hour, index) => (
                    <li key={index}>
                      <strong>{hour.day}:</strong> {hour.hours}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Get Direction */}
            <div className="mb-8 flex flex-col space-y-8 sm:mb-0">
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
          </div>
          <div className="border-t border-white border-opacity-20 py-4 text-center text-sm">
            © {currentYear} Charminar Indian Restaurant & Catering. All rights reserved.
          </div>
        </footer>
      </>
    );
  }
  