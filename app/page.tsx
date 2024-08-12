"use client";

import { useState } from "react";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import About from "@/app/ui/about_us";
import TestimonialSlider from "@/app/ui/testimonial";
import Link from "next/link";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setShowAbout={setShowAbout} />
      <main className="flex flex-1 flex-col items-center justify-center p-8">
        {showAbout ? (
          <About />
        ) : (
          <div className="flex flex-col md:flex-row md:space-x-8 p-8">
            {/* Left Side: Image */}
            <div className="flex-1">
              <img
                src="/about_us.jpeg" // Use the correct path to your main image
                alt="Main Visual"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                width={500}
                height={500}
              />
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 mt-8 md:mt-0">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to CHARMINAR Indian Restaurant & Catering!
              </h1>
              <p className="mb-4">
                A Restaurant serving authentic Indian cuisine, has been an
                identity for hospitality and a symbol of awesome food served in
                a spacious environment. Known for serving the best Indian food
                made with authentic, fresh ingredients and spices to serve the
                richest of the taste. Whether you’re interested in joining us
                for lunch or dinner, you’re sure to experience a meal you’ll
                remember.
              </p>
              <p className="mb-4">
                The delight for our Customers has been further extended to
                catering at Birthday Parties, Weddings, Private Events & Local
                Barbecues, making us the most preferred Indian Restaurant &
                Catering in San Diego!
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-2">Our Specialties</h2>
                <p className="mb-4">
                  We take pride in our unique blend of spices and traditional
                  recipes. Our menu offers a variety of mouth-watering dishes,
                  from aromatic biryanis to flavorful curries, all crafted with
                  care and passion.
                </p>
                <p className="mt-4">
                  <Link href="/about" className="text-blue-600 hover:underline">
                    Read More about our special events and offers.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial Slider */}
       
          <TestimonialSlider />
      
      </main>
      <Footer />
    </div>
  );
}
